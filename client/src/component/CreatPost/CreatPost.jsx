import { useEffect, useState, useContext } from "react";

import { useLocation , useNavigate } from "react-router-dom";

import {
  Box,
  styled,
  FormControl,
  InputBase,
  Button,
  TextareaAutosize,
} from "@mui/material";
import { AddCircle as Add } from "@mui/icons-material";

import { DataContext } from "../../context/DataProvider";
import { API } from "../../services/api";

const StyledImage = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const Container = styled(Box)(({theme})=>({
  margin: '70px 100px',
  [theme.breakpoints.down('md')]:{
    margin : 0
  }
}));

const StyledFormControl = styled(FormControl)`
  maring-top: 10px;
  display: flex;
  flex-direction: row;
`;
const StyledTextFiedl = styled(InputBase)`
  flex: 1;
  margin: 0px 30px;
  font-size: 25px;
`;

const TextArea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 50px;
  font-size: 18px;
  border: none;
  &:focus-visible {
    outline: none;
  }
`;

const initialPost = {
  title: "",
  descritption: "",
  picture: "",
  username: "",
  name:"",
  categories: "",
  createdDate: new Date(),
};

const CreatPost = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const [post, setPost] = useState(initialPost);

  const [file, setFile] = useState("");

  const { account } = useContext(DataContext);

  const url = post.picture
    ? post.picture
    : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        //API calling

        const response = await API.uploadFile(data);

        post.picture = response.data;
        
      }
    };
    getImage();
    post.categories = location.search?.split("=")[1] || "ALL";
    post.username = account.username;
    post.name = account.name
  }, [file]);

  const handelChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  
  };

  const savePost = async()=>{
      const resposne = await API.createPost(post)
      
      if(resposne.isSuccess){
        navigate('/');
      }
}


  return (
    <Container>
      <StyledImage src={url} alt="banner" />
      <StyledFormControl>
        <label htmlFor="fileInput">
          <Add fontSize="large" color="action" />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <StyledTextFiedl
          placeholder="title"
          onChange={(e) => handelChange(e)}
          name="title"
        />
        <Button variant="contained" onClick={()=> savePost()} >PUBLISH</Button>
      </StyledFormControl>

      <TextArea
        minRows={5}
        placeholder="Tell Your Story......"
        onChange={(e) => handelChange(e)}
        name="descritption"
      />
    </Container>
  );
};

export default CreatPost;

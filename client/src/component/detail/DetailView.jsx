import { useEffect, useState, useContext } from "react";

import { Box, Typography, styled } from "@mui/material";

import { useParams, Link, useNavigate } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";

import { DataContext } from "../../context/DataProvider.jsx";

import Comment from "./comments/Comments.jsx";

import { getPostById, deletePostRequest } from "../../fetch.js";

const Container = styled(Box)(({ theme }) => ({
  margin: "70px 100px",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "50vh",
  objectFit: "cover",
});

const Heading = styled(Typography)`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
  word-break: break-word;
`;

const Editicon = styled(EditIcon)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;
const Deleticon = styled(DeleteIcon)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const Author = styled(Box)`
  color: #878787;
  margin: 20px 0;
  display: flex;
`;

const Description = styled(Typography)`
  word-break: break-word;
`;

const DetailView = () => {
  const [post, setPost] = useState({});

  const { id } = useParams();

  const { account } = useContext(DataContext);

  const Navigate = useNavigate();

  const url =
    "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPostById(id);

      if (response) {
        setPost(response.data);
      }
    };
    fetchData();
  }, []);

  const deletePost = async () => {
    try {
      const res = await deletePostRequest(post._id);

      if (res) {
        Navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Image src={post.picture ? post.picture : url} alt="blog" />

      <Box style={{ float: "right" }}>
        {account.username === post.username && (
          <>
            {" "}
            <Link to={`/update/${post._id}`}>
              <Editicon color="primary" />
            </Link>
            <Deleticon onClick={() => deletePost()} color="error" />
          </>
        )}
      </Box>

      <Heading>{post.title}</Heading>

      <Author>
        <Typography>
          {" "}
          Author :{" "}
          <Box component={"sapn"} style={{ fontWeight: 600 }}>
            {" "}
            {post.name}{" "}
          </Box>
        </Typography>
        <Typography style={{ marginLeft: "auto" }}>
          {" "}
          {new Date(post.createdDate).toDateString()}{" "}
        </Typography>
      </Author>

      <Description>{post.descritption}</Description>

      <Comment post={post} />
    </Container>
  );
};

export default DetailView;

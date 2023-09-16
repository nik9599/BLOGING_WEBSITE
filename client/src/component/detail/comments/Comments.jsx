import { useState, useContext, useEffect } from "react";

import { Box, Button, TextareaAutosize, styled } from "@mui/material";

import { DataContext } from "../../../context/DataProvider";


import {getAllComents,newComment} from "../../../fetch.js"

//component

import Comment from "./Comment.jsx";

const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
`;
const Image = styled("img")({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
});

const StyledTextArea = styled(TextareaAutosize)`
  height: 100px;
  width: 100%;
  margin: 0 20px;
`;

const initialValues = {
  name: "",
  username: "",
  postId: "",
  comments: "",
  date: new Date(),
};

const Comments = ({ post }) => {
  const url = "https://static.thenounproject.com/png/12017-200.png";

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState(initialValues);
  const { account } = useContext(DataContext);
  const [toggel, setToggel] = useState(false);

  useEffect(() => {
    const getData = async () => {
      // fetching all the comments
      const res = await getAllComents(post._id)
      if (res) {
        setComments(res.data);
        console.log(comments);
      }
    };

    getData();
  }, [post, toggel]);

  const handleChange = (e) => {
    setComment({
      ...comment,
      name: account.name,
      username: account.username,
      postId: post._id,
      comments: e.target.value,
    });
  };

  const AddComment = async () => {
   // adding new comment
    let resposne =  await newComment(comment)

    if (resposne) {
      setComment(initialValues);
    }

    setToggel((prevState) => !prevState);
  };

  return (
    <Box>
      <Container>
        <Image src={url} alt="dp" />
        <StyledTextArea
          minRows={5}
          placeholder="What's on your mind?"
          value={comment.comments}
          onChange={(e) => handleChange(e)}
        />
        <Button
          variant="contained"
          size="medium"
          style={{ height: "40px" }}
          onClick={(e) => AddComment(e)}
        >
          POST
        </Button>
      </Container>
      <Box>
        {comments &&
          comments.length > 0 &&
          comments.map((comment) => (
            <Comment comment={comment} setToggel={setToggel} />
          ))}
      </Box>
    </Box>
  );
};

export default Comments;

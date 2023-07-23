import { Box, Typography, styled } from "@mui/material";

import {addElipsis} from '../../../utils/common-function'



//css handling'

const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radiu: 10px;
  margin: 10px;
  max-height: 350px;
  overflow-y : hidden;
  text-align: justify;
  display : flex;
  align-items : center;
  flex-direction : column; 
  & > p {
    padding: 0 5px 5px 5px;
  }
`;
const Image = styled("img")({
  width: "100%",
  borderRadius : '10px 10px 0 0',
  objectFit : 'cover',
  height:'150px',
  
});
const Text = styled(Typography)`
  color : #878787;
  font-size :12px;
`
const Title = styled (Typography)`
    font-size:18px ;
    font-weight : 700;
`

const Detail = styled(Typography)`
  font-size : 14px;
`

const PostCard = ({ post }) => {

    const url = post.picture ? post.picture : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'

  return (
    <Container>
      <Image src={url} alt="BLog" />
      <Text>{post.categories}</Text>
      <Title>{addElipsis(post.title, 10)}</Title>
      <Text> {post.name} </Text>
      <Detail> {addElipsis(post.descritption , 100)} </Detail>
    </Container>
  );
};

export default PostCard;

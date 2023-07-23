import { useEffect, useState } from "react";

import { API } from "../../../services/api";
import { Box , Grid} from "@mui/material";
import { useSearchParams  , Link} from "react-router-dom";

//components
import PostCard from "./PostCard";

export const Post = () => {
  const [posts, setPost] = useState([]);

  const [searchParams] =  useSearchParams()

  const category = searchParams.get('category')


  useEffect(() => {
    const fetchDate = async () => {
      let resposne = await API.getAllPost({category : category || ''});
      if (resposne.isSuccess) {
        setPost(resposne.data);
        console.log(posts);
      }
    };
    fetchDate();
  }, [category]);

  return (
    <>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Grid item lg={3} sm={4} xs={12}>
            <Link to={`details/${post._id}`} style={{textDecoration:'none' ,  color:'inherit'}}  >
            <PostCard post={post} />
            </Link>
          </Grid>
        ))
      ) : (
        <Box style={{ color: "#878787", margin: "30px 80px", fontSize: 18 }}>
          ! NO DATA FOUND
        </Box>
      )}
    </>
  );
};

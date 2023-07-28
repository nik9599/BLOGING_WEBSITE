import { useContext } from "react";

import { DataContext } from "../../../context/DataProvider";

import { Box, Typography  , styled} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "../../../services/api";

const Component = styled(Box)`
   margin-top : 30px;
   background : #F5F5F5;
   padding : 10px;
`

const Container = styled(Box)`
   display : flex;
   margin-bottom  :5px;
`

const Name = styled(Typography)`
    font-weight: 600;
    font-size : 18px;
    margin-right : 20px
`
const StyleDate = styled(Typography)`
   color : #878787;
   font-size : 14px;
`

const StyledDeletIcon =  styled(DeleteIcon)`
    margin-left : auto;
`

const Comment = ({comment , setToggel} ) => {

    const {account} = useContext(DataContext);

    const removeComment = async()=>{
               const res = await API.deletComment(comment._id);

               if(res.isSuccess){
                    setToggel((prevState) => !prevState)
               }
    }

  return (
    <Component>
      <Container>
        <Name>{comment.name}</Name>
        <StyleDate>{new Date(comment.date).toDateString()}</StyleDate>
        {comment.username === account.username && <StyledDeletIcon  onClick={()=>removeComment()} />}
      </Container>
      <Box>
        <Typography>{comment.comments}</Typography>
      </Box>
    </Component>
  );
};

export default Comment;

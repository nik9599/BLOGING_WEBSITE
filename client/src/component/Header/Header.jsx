
import { AppBar , Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(AppBar)`
background : #FFFFFF;
color :#000
`

const Container = styled(Toolbar)`
   justify-content:center;
   & >a{
    padding : 20px;
    text-decoration:none;
    color: inherit;
    pointer:cursor;
   }
`


const Header = ()=>{
    return(
       <Component>
        <Container>
            <Link to='/' >Home</Link>
            <Link to='about' >About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'onClick={()=>window.sessionStorage.clear()}>LOGOUT</Link>
        </Container>
       </Component>
    )
}

export default Header;
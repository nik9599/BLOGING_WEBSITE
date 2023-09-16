import { Box, TextField, Button, styled, Typography } from "@mui/material";
import BackgroundImage from "../IMage/Tech Bloger.png";
import { useState, useContext } from "react";

import { logginUser, siggnupUser } from "../fetch.js";
import { DataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";
import { setHeaders, getAccessToken } from "../utils/common-function.js";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Image = styled("img")({
  width: 200,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transformation: none;
  background: #787373;
  height: 40px;
  border-radius: 2px;
  color: white;
`;

const SignUpButton = styled(Button)`
  text-transformation: none;
  background: #fff;
  height: 40px;
  border-radius: 2px;
  color: blue;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const UserData = {
  name: "",
  username: "",
  password: "",
};

const loginInitialValue = {
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {
  const [account, toggelAccount] = useState("login");

  const [signup, setSignUp] = useState(UserData);

  const [login, setLogin] = useState(loginInitialValue);

  const [error, setError] = useState("");

  const { setAccount } = useContext(DataContext);

  const Navigate = useNavigate();

  const toggelState = () => {
    account == "signup" ? toggelAccount("login") : toggelAccount("signup");
  };

  const onInputChange = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signUpUser = async () => {
    
    let response = await siggnupUser(signup);

    if (response) {
      setError("");
      setSignUp(UserData);
      toggelAccount("login");
    } else {
      setError("Something Went wrong! Please try later");
    }
  };

  const loginUser = async () => {
    let response = await logginUser(login);

    if (response) {
      setError("");
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accesToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );
      setHeaders(getAccessToken());
      setAccount({
        username: response.data.username,
        name: response.data.name,
      });
      isUserAuthenticated(true);
      Navigate("/");
    } else {
      setError("Something went wrong");
    }
  };

  return (
    <Component>
      <Box>
        <Image src={BackgroundImage} />
        {account == "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              // value={login.username}
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter UserName"
            />
            <TextField
              variant="standard"
              onChange={(e) => onValueChange(e)}
              // value={login.password}
              name="password"
              label="Enter Password"
            />
            {error && <Error>{error}</Error>}
            <LoginButton variant="contained" onClick={() => loginUser()}>
              Login
            </LoginButton>
            <Text style={{ textAlign: "center" }}> OR</Text>
            <SignUpButton onClick={() => toggelState()}>
              Create an Account
            </SignUpButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="name"
              label="Enter Name"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Passowrd"
            />

            {error && <Error>{error}</Error>}

            <SignUpButton onClick={() => signUpUser()}>SignUp</SignUpButton>
            <Text style={{ textAlign: "center" }}> OR</Text>
            <LoginButton variant="contained" onClick={() => toggelState()}>
              Already have an Account
            </LoginButton>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;

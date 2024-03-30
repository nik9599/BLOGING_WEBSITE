import jwt from "jsonwebtoken";
import UserData from "../class/user.js";
import User from "../model/user.js";
import token from "../model/token.js";
import dotEnv from "dotenv";

dotEnv.config();

export const signUpUser = async (req, res) => {
  try {
    const { username, email, name, password } = req.body;
    const userData = new UserData(username, email, name, password);

    //checking email formate

    if (!userData.emailValidator()) {
      return res.status(401).json({ msg: "Email format is not valid" });
    }

    //checking password

    if (!userData.checkPassword()) {
      return res.status(401).json({
        msg: "Password should have at least one number and one special character",
      });
    }

    //encrypting password
    await userData.encryptPassword();

    // saving user data in database
    const newUser = new User({
      username: userData.username,
      email: userData.email,
      name: userData.name,
      password: userData.password,
    });

    await newUser.save();

    return res.status(200).json({
      msg: "signUp successfull",
    });
  } catch (error) {
    return res.status(500).json({
      message: "signUp failed",
    });
  }
};

export const loginUser = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  try {

    const userData = new UserData(user.username, user.email, user.name, user.password);

    if (userData.validatePassword(req.body.password)) {
      const accesToken = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_KEY);

      const newToken = new token({ token: refreshToken });
      await newToken.save();

      return res.status(200).json({
        accesToken: accesToken,
        refreshToken: refreshToken,
        name: userData.getName(),
        username: userData.getUsername(),
      });
    } else {
      return res.status(400).json({ msg: "password does not match" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error while login the user" });
    console.log(error);
  }
};


import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user.js";
import token from "../model/token.js";
import dotEnv from "dotenv";
dotEnv.config();


export const signUpUser = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);

    const user = {
      username: req.body.username,
      name: req.body.name,
      password: hash,
    };

    const newUser = new User(user);

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
    let match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const accesToken = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_KEY);

      const newToken = new token({ token: refreshToken });
      await newToken.save();

      return res
        .status(200)
        .json({
          accesToken: accesToken,
          refreshToken: refreshToken,
          name: user.name,
          username: user.username,
        });
    } else {
      return res.status(400).json({ msg: "password does not match" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error while login the user" });
    console.log(error);
  }
};


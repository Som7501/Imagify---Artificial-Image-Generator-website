import express from "express";
import {
  registerUser,
  loginUser,
  userCredits,
} from "../Controller/userController.js";
import userAuth from "../Middlewares/Auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);

export default userRouter;

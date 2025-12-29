import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./Config/mongodb.js";
import userRouter from "./Routes/userRoute.js";
import imageRouter from "./Routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.get("/", (req, res) => res.send("API is running"));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

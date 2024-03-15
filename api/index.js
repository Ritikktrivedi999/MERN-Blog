import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running at 3000 port");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRouter);

app.use((err, req, resp, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  resp.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

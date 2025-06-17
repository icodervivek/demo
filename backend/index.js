import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoute.js";
import cors from "cors";

dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  })
);

mongoose
  .connect(process.env.URI)
  .then((data) => console.log(`Mongodb Connected...`))
  .catch((e) => console.log(`Something went wrong ` + e));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is the homepage",
  });
});

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running on PORT ${process.env.PORT}`);
});

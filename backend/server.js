import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./database/connectToMongoDB.js"
import cookieParser from "cookie-parser";
import MessageRoutes from "./routes/message.routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()); // used to parse data which is coming from the frontend convert it into the json payloads 
app.use(cookieParser());

app.use("/api/auth", authRoutes); // this is the middleware
app.use('/api/message', MessageRoutes)
app.use('/api/users', userRoutes)

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});

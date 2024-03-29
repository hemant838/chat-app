import mongoose from "mongoose";

const connectToMongoose = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

export default connectToMongoose;

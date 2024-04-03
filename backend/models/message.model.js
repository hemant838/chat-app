import mongoose from "mongoose";

const mongooseSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        recieverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        //createdAt and updatedAt  => meesage.createdAt
    },
    { timestamp: true }
);

const Message = mongoose.model("Message", mongooseSchema);

export default Message;

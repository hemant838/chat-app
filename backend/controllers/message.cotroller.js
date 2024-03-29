import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    
    // await conversation.save();
    // await newMessage.save();

    // this is also working the same way  but using promise.all it just work asynchronously
    // means this will run in parllel
    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);


  } catch (error) {
    console.log("error in sendMessage controller", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userTochatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userTochatId] },
    }).populate("Messages"); // not refernce but actual messages that is send by another user

    if (!conversation) {
      return res.status(404).json([]);
    }
    const messages =  conversation.messages;

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("error in sendMessage controller", error.message);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

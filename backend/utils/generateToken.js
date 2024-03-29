import jwt from "jsonwebtoken";

const generateToken = (userid, res) => {
  const token = jwt.sign({ userid }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 60 * 60 * 24 * 1000, // ms
    httpOnly: true, //  prevent xss attacks cross-site scripting attacks
    sameSite: "strict", // csrf attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  
});
};

export default generateToken;

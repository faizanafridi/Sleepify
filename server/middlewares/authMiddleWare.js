const JWT = require("jsonwebtoken");
const User = require("../models/userModel");
const dotenv = require("dotenv");
dotenv.config();

const fetchUser = async (request, response, next) => {
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith("Bearer")
  ) {
    try {
      let token = request.headers.authorization.split(" ")[1];
      const decoded = JWT.verify(token, process.env.JWT_SECRET);
      request.user = await User.findById(decoded.user.id).select("-password");
      next();
    } catch (error) {
      response.status(401).json({ Error: "Token not verified" });
      throw new Error("Not Authorized Token Invalid");
    }
  } else {
    response.status(401).json({ Error: "Token not found" });
    throw new Error("Not Authorized");
  }
};
module.exports = { fetchUser };

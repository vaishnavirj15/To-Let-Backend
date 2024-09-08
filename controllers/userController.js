const { jwtDecode } = require("jwt-decode");
const User = require("../models/userModel");

exports.getUserInfo = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(401).json("Unauthorised");
    }
    const decoded = jwtDecode(token);

    const userId = decoded.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json("user not found");
    }

    const userData = {
      userId: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      userType: user.userType,
    };

    res.status(200).json(userData);
  } catch (err) {
    console.error("Error in fetching user info: ", err);
    res.status(500).json("Internal server error");
  }
};

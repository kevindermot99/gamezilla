const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());

// conenction
mongoose.connect(
  "mongodb+srv://mbonimpaye:mbonimpaye@gamezilla.7ysyg1j.mongodb.net/gamezilla"
);

// user table schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});
const User = mongoose.model("users", userSchema);

// login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.status(200).json({
          message: "Login Successful",
          userId: user.id,
          username: user.username,
        });
      } else {
        res.status(403).json({ message: "Password incorrect!" });
      }
    } else {
      res.status(403).json({ message: "User Doesn't exist!" });
    }
  } catch (err) {
    res.status(500).json({ message: "An error occured during login" });
  }
});

// sigun up route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(403).json({ message: "Email Already Exists!" });
    } else {
      // new user
      const newUser = new User({
        username: username,
        password: password,
        email: email,
      });
      await newUser.save();
      res
        .status(201)
        .json({
          message: "Account Created Successfully",
          userId: newUser.id,
          username: newUser.username,
        });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
});

app.listen(3001, () => {
  console.log("server up and runing !");
});

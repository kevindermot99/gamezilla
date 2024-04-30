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
  vcode: String,
  verified: String,
});
const User = mongoose.model("users", userSchema);

// cheking email
app.post("/checkemail", async (req, res) => {
  const email = req.body;

  try {
    const emailcheck = await User.findOne({ email });
    if (!emailcheck) {
      res.status(200).json({ message: "Email available" });
    } else {
      res.status(403).json({ message: "Email Already Exists" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err });
  }
});

// get userDetails
app.get("/getUser/:id", async (req, res) => {
  const id = req.params.id;
  User.findById({ _id: id })
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        if (user.verified === "false") {
          res.status(401).json({
            message: "Email not verified",
            userId: user.id,
            email: user.email,
          });
        } else {
          res.status(200).json({
            message: "Login Successful",
            userId: user.id,
            username: user.username,
          });
        }
      } else {
        res.status(403).json({ message: "Password incorrect!" });
      }
    } else {
      res.status(403).json({ message: "User doesn't exist!" });
    }
  } catch (err) {
    res.status(500).json({ message: "An error occured during login" });
  }
});

// sign up route
app.post("/signup", async (req, res) => {
  const { username, email, password, vcode } = req.body;

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
        vcode: vcode,
        verified: false,
      });
      await newUser.save();
      res.status(201).json({
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

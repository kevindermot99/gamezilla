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
app.get("/getuser/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findById({ _id: id })
    .then(res.json(user))
    .catch((err) => res.json(err));
});

// login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username });
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
      res.status(403).json({ message: "Account doesn't exist!" });
    }
  } catch (err) {
    res.status(500).json({ message: "An error occured during login" });
  }
});

// sign up route
app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExists = await User.findOne({ username: username });
    if (userExists) {
      res.status(403).json({ message: "username Taken" });
    } else {
      // new user
      const newUser = new User({
        username: username,
        password: password,
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

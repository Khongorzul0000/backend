const { User } = require("../models");

const createUser = async (req, res) => {
  const body = req.body;
  const result = await new User(body).save();
  res.send(result);
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  
  if (user.password === password) {
    res.send(user);
  } else {
    res.status(401).json({ message: "Username or password is invalid" });
  }
};

const getUsers = async (_req, res) => {
  const result = await User.find({});
  res.send(result);
};

const getUser = async (req, res) => {
  const result = await User.findById(req.params.id);
  res.send(result);
};

module.exports = { createUser, getUsers, getUser, loginUser };
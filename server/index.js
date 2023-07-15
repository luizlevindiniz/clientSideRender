const express = require("express");
const app = express();
const port = 3000;
const { v4: uuid } = require(`uuid`);
const mongoose = require("mongoose");
const User = require("./models/user");

app.use(express.json());

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ferClientSideRenderClass");
  console.log("Mongo connect");
}
main().catch((err) => {
  console.log(err, "Mongo Error!");
});

/* 
const user1 = {
  id: 1,
  name: `luiz`,
  age: 23,
};

const user2 = {
  id: 2,
  name: `fer`,
  age: 22,
};

let users = {
  1: user1,
  2: user2,
};
 */
/* 
app.get("/health", (req, res) => {
  res.json({
    status: `up`,
  });
});

app.get(`/users`, (req, res) => {
  res.json({
    users: Object.values(users),
  });
});

app.get(`/users/:id`, (req, res) => {
  const { id } = req.params;
  res.json({
    user: users[id],
  });
});

app.put(`/users/:id`, (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  users[id] = {
    name: name,
    age: age,
    id: id,
  };
  res.json({
    user: users[id],
  });
});

app.post(`/users`, (req, res) => {
  const { name, age } = req.body;
  const id = uuid();

  users[id] = {
    name: name,
    age: age,
    id: id,
  };
  res.json({
    user: users[id],
  });
});

app.delete(`/users/:id`, (req, res) => {
  const { id } = req.params;
  const delUser = users[id];
  delete users[id];
  res.json({
    user: delUser,
  });
});
 */

app.get("/health", (req, res) => {
  res.json({
    status: `up`,
  });
});

app.get(`/users`, async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get(`/users/:id`, async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json(user);
});

app.put(`/users/:id`, async (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    { name: name, age: age },
    { new: true }
  );
  res.json(user);
});

app.post(`/users`, async (req, res) => {
  const { name, age } = req.body;
  const user = new User({ name: name, age: age });
  await user.save();
  res.json(user);
});

app.delete(`/users/:id`, async (req, res) => {
  const { id } = req.params;
  const delUser = await User.findByIdAndDelete(id, { new: true });
  res.json(delUser);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`online`);
  }
});

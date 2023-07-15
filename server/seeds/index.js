const mongoose = require("mongoose");
const User = require("../models/user");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ferClientSideRenderClass");
  console.log("Mongo connect");
}
main().catch((err) => {
  console.log(err, "Mongo Error!");
});

const seedDB = async function () {
  await User.deleteMany({});
  let a = new User({ name: "Fer", age: 23 });
  let b = new User({ name: "Luw", age: 25 });
  let c = new User({ name: "David", age: 21 });
  await a.save();
  await b.save();
  await c.save();
};

seedDB().then(() => {
  mongoose.disconnect();
});

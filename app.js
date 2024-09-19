const express = require("express");
const app = express();

const usermodel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("HELLLO");
});

app.get("/create", async (req, res) => {
  const user = await usermodel.create({
    name: "Parag",
    username: "parag_jagtap",
    email: "parag@gmail.com",
  });
  res.send(user);
});

app.get("/update", async (req, res) => {
  const user = await usermodel.findOneAndUpdate(
    { username: "parag_jagtap" },
    {
      name: "Parag Jagtap",
      username: "parag_jagtap",
      email: "parag@gmail.com",
    }
  );
  res.send(user);
});

app.get("/read", async (req, res) => {
  const user = await usermodel.find();
  res.send(user);
});

app.get("/delete", async (req, res) => {
  const user = await usermodel.findOneAndDelete({ username: "parag_jagtap" });
  res.send(user);
});

app.listen(3000, () => {
  console.log("Server is running");
});

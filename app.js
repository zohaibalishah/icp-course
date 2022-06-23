const express = require("express");
const app = express();

// GET
// POST PUT Delete
// api/user
// api/post

app.get("/", (req, res) => {
  // req
  // res
  const user = {
    name: "zohaib",
    email: "zohaib@gmail.com",
    age: 24,
  };
  res.json(user);
});

app.post("/", (req, res) => {
  res.json("Got a POST request");
});

app.delete("/", (req, res) => {
  res.json("Got a DELETE request");
});

app.put("/", (req, res) => {
  res.json("Got a put request");
});

//

app.get("/api/users", (req, res) => {
  const user = {
    name: "zohaib",
    email: "zohaib@gmail.com",
    age: 24,
  };
  res.json({ user, msg: "user router" });
});

app.get("/api/users/:id", (req, res) => {
  // req.params.id

  res.json({ userId: req.params.id });
});

app.listen(3000, () => {
  console.log("server start");
});

const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

const users = [
  { id: 0, name: "shabana", email: "shabana@gmail.com", phone: 255 },
  { id: 1, name: "shabnur", email: "shabana@gmail.com", phone: 54521 },
  { id: 2, name: "shuchorita", email: "shabana@gmail.com", phone: 5264 },
  { id: 3, name: "soniya", email: "shabana@gmail.com", phone: 870101 },
  { id: 4, name: "shrabonti", email: "shabana@gmail.com", phone: 0152521 },
  { id: 5, name: "susmita", email: "shabana@gmail.com", phone: 0154521 },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

//post METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

// dynamic api

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "orange", "banana", "appale"]);
});

app.get("/fruits/mangoes/fazli", (req, res) => {
  res.send("Ymmy tok marka misty");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});

const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/view"));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  console.log("this is Middleware ");
  next();
});

app.get("/", (req, res) => {
  const userName = "Thor";
  const Description = "Strongest Avenger!";
  const extraData = "this is Another Data";
  // res.send(" <h1> Successfully Connected !! </h1> ");
  res.render("home.ejs", { userName, Description, extraData });
});

app.get("/fact", (req, res) => {
  res.json({
    fact: "Milk can give some cats diarrhea.",
    length: 33,
  });
});

app.get("/fruits", (req, res) => {
  res.send("This is Fruits Pathway");
});

app.get("/fruits/:fruit/test/:id", (req, res) => {
  console.log(req);
  const { fruit, id } = req.params;
  res.send(`fruit clicked : ${fruit} and Id : ${id}`);
});

app.get("/test", (req, res) => {
  res.send("this is first response");
});

app.get("/req", (req, res) => {
  res.send("This is GET Request");
});

app.post("/req", (req, res) => {
  res.send("This is POST Request");
});

app.delete("/req", (req, res) => {
  res.send("This is Delete Request");
});

app.get("/dice", (req, res) => {
  const Number = Math.floor(Math.random() * 6) + 1;
  res.render("dice.ejs", { Number });
});

app.get("/loop", (req, res) => {
  const avengers = ["Tony", "Thor", "Natasha", "Hulk"];
  res.render("avengers.ejs", { avengers });
});

app.get("/twitter/:user", (req, res) => {
  const data = require("./data.json");
  const { user } = req.params;
  const userProfile = data[user];
  res.render("twitter.ejs", { user, userProfile });
});

app.get("/forms", (req, res) => {
  res.render("form.ejs");
});

app.get("/register", (req, res) => {
  const { userName123, password123 } = req.query;
  console.log("user Name : ", userName123);
  console.log("Password : ", password123);
  res.send("<h1> this is a GET method </h1>");
});

app.post("/register", (req, res) => {
  res.send("<h1> this is a POST method </h1>");
});
// Path Parameters
app.get(/.*/, (req, res) => {
  res.send("Unknown Page !! please check the url!!");
});

app.listen(port, () => {
  console.log(`server up and Listening at port : ${port}`);
});

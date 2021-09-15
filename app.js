const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view-engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list.ejs", { kindOfDay: day, newListItems: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("The sever is running on port 3000!!!");
});

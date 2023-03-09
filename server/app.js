const express = require("express");

const app = express();

// Setting views are located. You can also set a more specific loc"
app.set('view engine', 'ejs');

// listen
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index", {title : "My Projects"})
});

app.get("/books", (req, res) => {
  const books = [
    {title: "book1", author:"Anoop", rating:"5"},
    {title: "book2", author:"vish", rating:"2"},
  ]
  res.render("book", {title : "Book Tracker", books: books})
});

app.use((req, res) => {
  res.render("404", {title : "404"})
});

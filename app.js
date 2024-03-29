const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/articleDB");
// <-----------------Schema-------------------->
const articleSchema = new mongoose.Schema({
  name: String,
  content: String,
});
const article = mongoose.model("article", articleSchema);
// <----------------Article get--------------------------->

app.get("/articles", (req, res) => {
  article.find({}, (err, foundArticles) => {
    res.send(foundArticles);
  });
});

app.get("/articles/:articleName", (req, res) => {
  const articleName = req.params.articleName;
  article.find({}, (err, foundArticle) => {
    foundArticle.forEach((el) => {
      if (articleName === el.name) {
        res.send(el);
      } else {
        res.send("Article not found");
      }
    });
  });
});

// <----------------Article Post--------------------------->

app.post("/articles", (req, res) => {
  const newArticle = new article({
    name: req.body.title,
    content: req.body.content,
  });
  newArticle.save((err) => {
    if (!err) {
      res.send("Successfully added new document!");
    } else {
      res.send(err);
    }
  });
});
// <----------------Article delete--------------------------->

app.delete("/articles", (req, res) => {
  article.deleteMany({}, (err) => {
    if (!err) {
      res.send("Successfully deleted all the documents!");
    } else {
      res.send(err);
    }
  });
});

app.delete("/articles/:articleName", (req, res) => {
  article.findOneAndDelete({ name: req.params.articleName }, (err) => {
    if (!err) {
      res.send(
        "Successfully deleted article with the name " + req.params.articleName
      );
    } else {
      res.send(err);
    }
  });
});
// <----------------Article update--------------------------->

app.put("/articles/:articleName", (req, res) => {
  article.updateOne(
    { name: req.params.articleName },
    { name: req.body.title, content: req.body.content },
    { overwrite: true },
    (err) => {
      if (!err) {
        res.send("Successfully updated article " + req.params.articleName);
      } else {
        res.send(err);
      }
    }
  );
});

app.patch("articles/:articleName", (req, res) => {
  article.updateOne(
    { name: req.params.articleName },
    { $set: req.body },
    (err) => {
      if (!err) {
        res.send("Successfully patched " + req.params.articleName);
      } else {
        res.send(err);
      }
    }
  );
});

// <-------------------server listen------------------------>

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});

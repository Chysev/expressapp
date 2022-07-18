// This is the github router for our github.ejs
const express = require('express');
const github = express.Router();

github.get("/", (req, res) => {
  res.render("pages/github", {
    title: "Express App"
  })
})

module.exports = github;
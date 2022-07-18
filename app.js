const express = require('express');
const app = express();

app.set("view engine", "ejs"); // Rendering ejs files
app.use(express.static("assets/css")) // Rendering Static files such as css and images
app.use(express.static("assets/images")) // Rendering Static files such as css and images

// Rendering the index.ejs file
app.get("/", (req, res) => {
  res.render("index", {
    title: "Express App" // This is can be render <% = title%>
  })
})


// Reading the github.js file 
const github = require('./routes/github');

// In order to get /github we will use the github variable in the const 
app.use("/github", github);

const { port } = require('./config.json')
app.listen(port)

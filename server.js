// use express, path, and PORT.
const express = require("express");
const { appendFile, fstat } = require("fs");
const path = require("path");
const noteData = require("./db/notes.json");
const fs = require('fs');

const PORT = 3000;


const app = express();
// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// get the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//get notes.html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// post request to add note
app.post('/api/notes', (req, res) => {
  console.info(`${req.method} request received to add note`);

  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
    };

    const reviewString = JSON.stringify(newNote);

    fs

    const response = {
      status: "success",
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json("Error in posting note");
  }
});

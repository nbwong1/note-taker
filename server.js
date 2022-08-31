// use express, path, and PORT.
const express = require('express');
const { appendFile } = require('fs');
const path = require('path');
const noteData = require('./db/db.json');
const PORT = 3001; 

// set up express app to handle data parsing

app.use(express.urlendcoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// get the index.html
app.get('/'. (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

//get notes.html

app.get('/api/notes', (req, res) => res.json(petData));

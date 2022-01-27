const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require ('./db/db.json');

const PORT = process.env.PORT || 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// app.get('/notes', (req, res) =>{
//   res.redirect("/notes");
// })

// app.get('/', (req, res) =>{
//   res.redirect("/index");
// })

app.get('/api/notes', (req, res) =>{
  res.json(notes);
})

app.post('/api/notes', (req, res) => {
  req.body.id=Math.floor(Math.random()*10000)
  notes.push (req.body)
  fs.writeFileSync ("./db/db.json", JSON.stringify(notes))
  res.json (notes);
})

app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);

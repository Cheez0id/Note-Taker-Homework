const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// app.get('/', (req, res) => res.send('Visit http://localhost:3001/index.html'));



//TODO: the below should take us to the notes html, not a response with the string below
app.get('/notes', (req, res) => res.send('Visit http://localhost:3001/notes.html'));


app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);

const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Visit http://localhost:3001/index.html'));

app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);

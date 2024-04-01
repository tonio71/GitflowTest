const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/sobre', (req, res) => {
  res.send('Endpoint sobre!!!!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// SEGUNDO TESTE FEITO
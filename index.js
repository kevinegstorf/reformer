const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'say hi to the API' });
});

app.listen(3000);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'say hi to the API' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

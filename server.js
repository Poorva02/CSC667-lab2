const express = require('express');

const app = express();

app.get('*', (req, res) => {
  return 'hello';
});

app.listen(3000);

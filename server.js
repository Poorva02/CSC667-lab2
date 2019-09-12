const express = require('express');

const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  //All logic here applies to all endpoints
  console.log(req.originalUrl);
  next();
});

// ``, magic keys to respond custom string
//http://localhost:3000/poorva?hello=Poorva
app.get('/poorva', (req, res) => {
  res.send(`Hello, ${req.query.hello}`);
  });

app.post('/post-test', (req, res) =>{
  res.send('worked');
});


//req->request, res->response
app.get('*', (req, res) => {
  res.send('hello, world!');
});


app.listen(3000);

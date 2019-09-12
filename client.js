const axios = require('axios');

//axios returns promises.
//network requests are async

axios.get('http://localhost:3000')
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => console.log(e));

const body = {
  hello: 'world',
  anArray: [1,2,4]
};

axios.post('http://localhost:3000/post-test')
  .then((res) => {
  console.log(res.data);
  })
  .catch((e) => console.log(e));
  

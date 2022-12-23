const express = require('express');
const app = express();

app.get('/reg', function (req, res) {
  res.send('Registration Page');
})

app.get('/', function (req, res) {
  res.send('Landing Page');
})

app.listen(4000, function(){
    console.log("The server is up on port:4000");
})
// express index.js

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public', {
  extensions: ['html']
}));

app.listen(8888, function () {
  console.log('App listening at http://localhost:8888.')
});

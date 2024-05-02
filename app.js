var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send('Oi, mundo :-)! Sejam bem-vindos!');
});

var port = 3001;

app.listen(port, function() {
  console.log(`Servidor Express rodando na porta ${port}`);
});


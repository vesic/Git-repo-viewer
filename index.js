var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
  res.render('index', {title: 'GitHub-repo-viewer!'});
});

var server = app.listen(port, function() {
  console.log('Listening at port %s', port);
});
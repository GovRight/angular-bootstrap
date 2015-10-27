var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// SETUP STUFF
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('views', './views');
app.set('view engine', 'ejs');

// AUTH SUCCESS CALLBACK
app.post('/auth/success', function(req, res) {
  var accessData = req.body.accessData || '{}';
  res.render('auth/success', { accessData: accessData });
});

// LAUNCH
var port = process.env.PORT || 3069;
var appName = process.env.APP_NAME || 'Legislation Lab App';
var server = app.listen(port, function () {
  console.log('%s backend running at http://localhost:%s', appName, port);
});

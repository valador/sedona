var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));
app.set('host', (process.env.HOST || 'localhost'));

//app.use('/', express.static(__dirname));
app.use(express.static(__dirname + '/static'));

app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.listen(app.get('port'), function() {
    console.log('Server started at: http://' + app.get('host') + ':' + app.get('port') + '/');
});

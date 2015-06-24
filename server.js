
var port = process.env.PORT || 9000;
var app = require('./server/config').app;

app.listen(port, function() {
	console.log('Server is now listening on:', port);
});

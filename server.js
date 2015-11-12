var 	express = require('express')
	,	bodyParser = require('body-parser')
	,	middleware = require('./controllers/middleware.js')
	,	mainCtrl = require('./controllers/mainCtrl.js')
	,	port = 9001
	,	app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.latestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesByType);




app.listen(port, function() {
	console.log('listening on ' + port);
});
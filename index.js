const express = require('express');
const config = require('./config');
const bodyParser = require('body-parser');

const app = express();


app.set('env', process.env.NODE_ENV || 'development');
app.set('port', config.server.port || 3000);

app.use(require('./app/middlewares/database'));
app.use(bodyParser.json()); // parse json requests

app.use(require('./routes'));


app.listen(app.get('port'), function() {
    console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});
const Router = require('express').Router();
const infoController = require('./app/controllers/infoController');

Router.get('/', function(req, res, next) {
  res.status(200).json({ msg: 'be happy' });
});

Router.use('/info', infoController);

module.exports = Router;

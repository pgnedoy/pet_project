const mysql = require('mysql');
const config = require('../../config');

const connection = mysql.createPool(config.database);

module.exports = function(req, res, next) {
  next();
};

module.exports.mysqlDB = connection;

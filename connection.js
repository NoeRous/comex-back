const { Sequelize } = require('sequelize');

const database = "comex";
const username = "postgres";
const password = "123456";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
});

module.exports = {
  sequelize
}
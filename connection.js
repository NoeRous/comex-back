const { Sequelize } = require('sequelize');

/*const database = "comex";
const username = "postgres";
const password = "123456";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
});*/

const database = "BDComexPentaho";
const username = "nrancari";
const password = "3tWKrpgOXjEA";
const host = "pruebacomexsql";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false 
    }
  }
});


module.exports = {
  sequelize
}
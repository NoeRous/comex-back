const { Sequelize } = require('sequelize');

/*const database = "comex";
const username = "postgres";
const password = "123456";
const host = "localhost";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',
  
});*/

const database = "BDComexPentahoPrueba";
const username = "nrancari";
const password = "3tWKrpgOXjEA";
const host = "pruebacomexsql";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: false,
      connectTimeout: 15000, // tiempo de espera para establecer la conexión
      requestTimeout: 30000 // tiempo de espera para las solicitudes
    }
  }
});

module.exports = {
  sequelize
}
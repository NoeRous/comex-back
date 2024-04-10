const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const { sequelize } = require('./connection');
const morgan = require('morgan');

const { Sequelize } = require('sequelize');

const router = require('./router/api');
app.use(morgan('dev'));
app.use(bodyParser.json());

// Habilitar CORS para todas las solicitudes
app.use(cors());

app.use(cors({
    origin: 'http://localhost:4200' // Origen permitido
  }));


app.use('/api', router);

  
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection success');
      return sequelize.sync();
    })
    .then(() => {
      console.log('Sync models');
      app.listen(port, () => {
        console.log(`Server listen on http://localhost:${port}`);
      });
    })
    .catch((error) => {
      console.error('Connection fail', error);
    });
const { sequelize } = require('../connection');
const { Sequelize } = require('sequelize');

function indexPeriodicidad(req, res) {

    var periodicidad =   [
    	{
            "cod_periodicidad": 1,
    		"des": "Anual",
    	},
    	{
            "cod_periodicidad": 2,
    		"des": "mesual",
    	},
    	{
            "cod_periodicidad": 3,
    		"des": "Trimestral",
    	},
    ];

    res.status(200).json({periodicidad});
}

async function indexGestiones(req, res) {

    const gestiones = await sequelize.query('select DISTINCT t.gestion from tiempo t ORDER BY t.gestion DESC',{type: Sequelize.QueryTypes.SELECT});
  
    console.log('gestiones',gestiones);
    return res.status(200).json({ gestiones });

    //res.status(200).send(periodicidad);
}


module.exports = {
    indexPeriodicidad,
    indexGestiones
}
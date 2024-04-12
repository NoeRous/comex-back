const { sequelize } = require('../connection');
const { Sequelize } = require('sequelize');
async function index(req, res) {
    const departamentos = await sequelize.query('select * from departamento order by cod_departamento',{type: Sequelize.QueryTypes.SELECT});
  
    console.log('departamentos',departamentos);
    return res.status(200).json({ departamentos });

    //res.status(200).send(periodicidad);
    
}
module.exports = {
    index
}
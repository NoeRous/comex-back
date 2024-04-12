const { sequelize } = require('../connection');
const { Sequelize } = require('sequelize');

async function index(req, res) {
    const medios = await sequelize.query('select * from medio order by des',{type: Sequelize.QueryTypes.SELECT});
  
    console.log('medios',medios);
    return res.status(200).json({ medios });
}


module.exports = {
    index
}
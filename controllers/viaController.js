const { sequelize } = require('../connection');
const { Sequelize } = require('sequelize');

async function index(req, res) {
    const vias = await sequelize.query('select * from via order by des',{type: Sequelize.QueryTypes.SELECT});
  
    console.log('vias',vias);
    return res.status(200).json({ vias });
}


module.exports = {
    index
}
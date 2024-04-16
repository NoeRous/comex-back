const { sequelize } = require('../connection');
const { Sequelize } = require('sequelize');
async function index(req, res) {
    const aduanas = await sequelize.query('select * from aduana order by cod_aduana',{type: Sequelize.QueryTypes.SELECT});
  
    console.log('aduanas',aduanas);
    return res.status(200).json({ aduanas });
}
module.exports = {
    index
}
const { sequelize } = require('../connection');
const { Sequelize } = require('sequelize');

async function indexContinentes(req, res) {
    const continentes = await sequelize.query('select  distinct cod_continente, des_continente from pais order by cod_continente ',{type: Sequelize.QueryTypes.SELECT});
  
    console.log('continentes',continentes);
    return res.status(200).json({ continentes });
}

async function indexPaisesDestino(req, res) {
    const paises = await sequelize.query('select  distinct cod_pais, des from pais order by des',{type: Sequelize.QueryTypes.SELECT});
  
    console.log('paises',paises);
    return res.status(200).json({ paises});
}




module.exports = {
    indexContinentes,
    indexPaisesDestino
}
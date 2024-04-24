const { sequelize } = require('../connection');
const { Sequelize } = require('sequelize');

async function resultadoImportacion(req, res) {
    res.status(200).json('resulta');
}

async function resultadoExportacion(req, res) {
    try {
        const postData = req.body;
        const flujo = postData.paso1Informacion.selectedFlujo;
        const cuantitativas = postData.paso1Informacion.selectedCuantitativas;
        switch (flujo.cod_flujo) {
            case 1:
                //var 1 armar info y var 3 
                var inf_var1 = '';
                var inf_var3 = '';
                const periocidad = postData.paso1Informacion.selectedPeriocidad;
                const gestiones = postData.paso1Informacion.selectedGestiones;
                if (periocidad && gestiones.length > 0) {
                    if (periocidad.cod_periodicidad == 1) {
                        inf_var1 = inf_var1 + 'gestion';
                    }
                    if (periocidad.cod_periodicidad == 2) {
                        inf_var1 = inf_var1 + 'gestion, des_mes';
                    }
                    if (periocidad.cod_periodicidad == 3) {
                        inf_var1 = inf_var1 + 'gestion,trimestre,des_mes'
                    }
                    var gestiones_cad = '';
                    for (const gestion of gestiones) {
                        gestiones_cad = gestiones_cad + gestion.gestion + ','
                    }
                    if (gestiones_cad.endsWith(',')) {
                        gestiones_cad = gestiones_cad.slice(0, -1);
                    }
                    inf_var3 = inf_var3 + 'gestion IN ( ' + gestiones_cad + ') and '

                }
                if (inf_var3.endsWith(' and ')) {
                    inf_var3 = inf_var3.slice(0, -5);
                }
                //fin var 1 armar info y var 3 

                //cuantitativas 
                var cuantitativaq = '';
                for (const cuantitativa of cuantitativas) {
                    if (cuantitativa.cod_cuantitativa == 1)
                        cuantitativaq = cuantitativaq + 'sum(e_kilbru) as sum_e_kilbru ,';
                    if (cuantitativa.cod_cuantitativa == 2)
                        cuantitativaq = cuantitativaq + 'sum(e_kilnet) AS sum_e_kilnet ,';
                    if (cuantitativa.cod_cuantitativa == 3)
                        cuantitativaq = cuantitativaq + 'sum(e_valor) AS sum_e_valor ,';
                }
                if (cuantitativaq.endsWith(',')) {
                    cuantitativaq = cuantitativaq.slice(0, -1);
                }
            // fin cuantitativas 

            //
            case 2:
            case 3:
            case 4:
            default:
        }

        const var1 = inf_var1;
        const var2 = cuantitativaq;
        const var3 = inf_var3;

        console.log(var1);
        console.log(var2);
        console.log(var3);

        const result = await sequelize.query(`EXEC ConsultaDinamica '${var1}', '${var2}', '${var3}'`, {
            type: sequelize.QueryTypes.SELECT
        });

        return res.status(200).json({ result });

    } catch (err) {
        console.error('Error al ejecutar el procedimiento almacenado:', err);
        res.status(500).json({ error: 'Error al ejecutar el procedimiento almacenado' });
    }
}


module.exports = {
    resultadoImportacion,
    resultadoExportacion
}
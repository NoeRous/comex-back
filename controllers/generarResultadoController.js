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
                var inf_var4 = '';
                const periocidad = postData.paso1Informacion.selectedPeriocidad;
                const gestiones = postData.paso1Informacion.selectedGestiones;
                if (periocidad && gestiones.length > 0) {
                    if (periocidad.cod_periodicidad == 1) {
                        inf_var1 = inf_var1 + 'gestion,';
                        inf_var4 = inf_var4 + `''TOTAL'' AS gestion,`;
                    }
                    if (periocidad.cod_periodicidad == 2) {
                        inf_var1 = inf_var1 + 'gestion, des_mes,';
                        inf_var4 = inf_var4 + `''TOTAL'' AS gestion,''TOTAL'' AS des_mes,`;
                    }
                    if (periocidad.cod_periodicidad == 3) {
                        inf_var1 = inf_var1 + 'gestion,trimestre,des_mes,'
                        inf_var4 = inf_var4 + `''TOTAL'' AS gestion,''TOTAL'' AS trimestre,''TOTAL'' AS des_mes,`;
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
              
                //fin var 1 armar info y var 3 
                //NANDINA
                const selectedNandina = postData.paso2Informacion.selectedNandina;
                const selectedSubNandina = postData.paso2Informacion.selectedSubNandina;
                const selectedSubNandinaDatos = postData.paso2Informacion.selectedSubNandinaDatos;

                if (selectedNandina && selectedSubNandina && selectedSubNandinaDatos && selectedSubNandinaDatos.length > 0) {
                    var nandina_cad = '';
                    for (const selectedSubNandinaDato of selectedSubNandinaDatos) {
                        if(selectedSubNandina == 1){
                            nandina_cad = nandina_cad + selectedSubNandinaDato.cod_niv1 + ','
                        }else{
                            nandina_cad = nandina_cad + "''"+selectedSubNandinaDato.cod_niv1+"''"+ ','
                        }
                    }
                    if (nandina_cad.endsWith(',')) {
                        nandina_cad = nandina_cad.slice(0, -1);
                    }

                    if(selectedSubNandina == 1){
                        inf_var1 = inf_var1 + 'n_des_seccion,';
                        inf_var4 = inf_var4 + `''TOTAL'' AS n_des_seccion,`;
                        inf_var3 = inf_var3 + 'n_cod_seccion IN ( ' + nandina_cad + ') and '
                    }
                    if(selectedSubNandina == 2){
                        inf_var1 = inf_var1 + 'n_des_capitulo,';
                        inf_var4 = inf_var4 + `''TOTAL'' AS n_des_capitulo,`;
                        inf_var3 = inf_var3 + 'n_capitulo IN ( ' + nandina_cad + ') and '
                    }
                    if(selectedSubNandina == 3){
                        inf_var1 = inf_var1 + 'des_partida,';
                        inf_var4 = inf_var4 + `''TOTAL'' AS des_partida,`;
                        inf_var3 = inf_var3 + 'cod_partida IN ( ' + nandina_cad + ') and '
                    }
                    if(selectedSubNandina == 4){
                        inf_var1 = inf_var1 + 'des_nandina,';
                        inf_var4 = inf_var4 + `''TOTAL'' AS des_nandina,`;
                        inf_var3 = inf_var3 + 'n_cod_nandina IN ( ' + nandina_cad + ') and '
                    }
                }

               
                //departamento

                const despartamentos = postData.paso2Informacion.selectedDepartamentos;

                if (despartamentos && despartamentos.length > 0) {
                    inf_var1 = inf_var1 + 'd_des,';
                    inf_var4 = inf_var4 + `''TOTAL'' AS d_des,`;
                    
                    var despartamentos_cad = '';
                    for (const despartamento of despartamentos) {
                        despartamentos_cad = despartamentos_cad + despartamento.cod_departamento + ','
                    }
                    if (despartamentos_cad.endsWith(',')) {
                        despartamentos_cad = despartamentos_cad.slice(0, -1);
                    }
                    inf_var3 = inf_var3 + 'd_cod_departamento IN ( ' + despartamentos_cad + ') and '

                }

                //continente
                const continentes = postData.paso2Informacion.selectedContinentes;
                if (continentes && continentes.length > 0) {
                    inf_var1 = inf_var1 + 'des_continente,';
                    inf_var4 = inf_var4 + `''TOTAL'' AS des_continente,`;
                    
                    var continentes_cad = '';
                    for (const continente of continentes) {
                        continentes_cad = continentes_cad + "''"+continente.cod_continente+"''"+ ','
                    }
                    if (continentes_cad.endsWith(',')) {
                        continentes_cad = continentes_cad.slice(0, -1);
                    }
                    inf_var3 = inf_var3 + `cod_continente IN ( ${continentes_cad}) and `

                }
                 //paises
                 const paises = postData.paso2Informacion.selectedPaises;
                 if (paises && paises.length > 0) {
                     inf_var1 = inf_var1 + 'p_des,';
                     inf_var4 = inf_var4 + `''TOTAL'' AS p_des,`;
                     
                     var paises_cad = '';
                     for (const pais of paises) {
                        paises_cad = paises_cad +pais.cod_pais+ ','
                     }
                     if (paises_cad.endsWith(',')) {
                        paises_cad = paises_cad.slice(0, -1);
                     }
                     inf_var3 = inf_var3 + `p_cod_pais IN ( ${paises_cad}) and `
                 }
                 //medios
                 const medios = postData.paso2Informacion.selectedMedios;
                 if (medios && medios.length > 0) {
                     inf_var1 = inf_var1 + 'm_des,';
                     inf_var4 = inf_var4 + `''TOTAL'' AS m_des,`;
                     
                     var medios_cad = '';
                     for (const medio of medios) {
                        medios_cad = medios_cad +medio.cod_medio+ ','
                     }
                     if (medios_cad.endsWith(',')) {
                        medios_cad = medios_cad.slice(0, -1);
                     }
                     inf_var3 = inf_var3 + `m_cod_medio IN ( ${medios_cad}) and `
                 }

                  //vias
                  const vias = postData.paso2Informacion.selectedVias;
                  if (vias && vias.length > 0) {
                      inf_var1 = inf_var1 + 'v_des,';
                      inf_var4 = inf_var4 + `''TOTAL'' AS v_des,`;
                      
                      var vias_cad = '';
                      for (const via of vias) {
                        vias_cad = vias_cad +via.cod_via+ ','
                      }
                      if (vias_cad.endsWith(',')) {
                        vias_cad = vias_cad.slice(0, -1);
                      }

                      inf_var3 = inf_var3 + `v_cod_via IN ( ${vias_cad}) and `
                  }

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

            //preparar variable 3 
            if (inf_var1.endsWith(',')) {
                inf_var1 = inf_var1.slice(0, -1);
            }
            if (inf_var3.endsWith(' and ')) {
                inf_var3 = inf_var3.slice(0, -5);
            }
            if (inf_var4.endsWith(',')) {
                inf_var4 = inf_var4.slice(0, -1);
            }
            //
            break
            case 2:
            case 3:
            case 4:
            default:
        }

        const var1 = inf_var1;
        const var2 = cuantitativaq;
        const var3 = inf_var3;
        const var4 = inf_var4;

        const result = await sequelize.query(`EXEC ConsultaDinamica '${var1}', '${var2}', '${var3}'`, {
            type: sequelize.QueryTypes.SELECT
        });
        const resultTotales = await sequelize.query(`EXEC ConsultaDinamicaTotales '${var4}', '${var2}', '${var3}'`, {
            type: sequelize.QueryTypes.SELECT
        });
        var headers = [];
        var colDefs = [];
        if(result && result.length >0 ){
            headers = Object.keys(result[0]);
            colDefs = headers.map(header => {
                return { field: header };
            });
        }
        return res.status(200).json({ headers, colDefs, result, resultTotales });

    } catch (err) {
        console.error('Error al ejecutar el procedimiento almacenado:', err);
        res.status(500).json({ error: 'Error al ejecutar el procedimiento almacenado' });
    }
}


module.exports = {
    resultadoImportacion,
    resultadoExportacion
}
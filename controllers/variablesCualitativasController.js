const { sequelize } = require('../connection');
const { Sequelize } = require('sequelize');

function index(req, res) {
    var cualitativas =   [
    	{
            "des": 'Productos según la Nomenclatura Común de Designación y Codificación de Mercancías de Países Miembros de la Comunidad Andina (NANDINA)',
            "cod_flujo":[1,2,3,4],
            "children":[  
                {  "cod_sub":1,
                    "des":"Sección NANDINA",
                },
                {  
                    "cod_sub":2,
                    "des":"Capítulo NANDINA",
                },
                {  
                    "cod_sub":3,
                    "des":"Partida NANDINA",
                },
                {  
                    "cod_sub":4,
                    "des":"NANDINA",
                }
            ]
    	},
        {
            "des": 'Clasificación Uniforme del Comercio Internacional (CUCI Rev.3)',
            "cod_flujo":[1,2,3,4],
            "children":[  
                {  
                    "cod_sub":5,
                    "des":"Sección CUCI Rev.3",
                },
                {  
                    "cod_sub":6,
                    "des":"Capítulo CUCI Rev.3",
                },
                {  
                    "cod_sub":7,
                    "des":"Grupo CUCI Rev.3",
                },
                {  
                    "cod_sub":8,
                    "des":"Subgrupo CUCI Rev.3",
                }
            ]
    	},
        {
            "des": 'Clasificación Internacional Industrial Uniforme (CIIU Rev.3)',
            "cod_flujo":[1,2,3,4],
            "children":[  
                {  
                    "cod_sub":9,
                    "des":"Categoría de Tabulación CIIU Rev.3",
                },
                {  
                    "cod_sub":10,
                    "des":"División CIIU Rev.3",
                },
                {  
                    "cod_sub":11,
                    "des":"Grupo CIIU Rev.3",
                },
                {  
                    "cod_sub":12,
                    "des":"Clase de Actividad CIIU Rev.3",
                }
            ]
    	},
        {
            "des": 'Clasificación Grandes Categorías Económicas (GCE Rev.3)',
            "cod_flujo":[1,2,3,4],
            "children":[  
                {  
                    "cod_sub":13,
                    "des":"Grandes Categorías GCE Rev.3",
                },
                {  
                    "cod_sub":14,
                    "des":"Categorías Básicas GCE Rev.3",
                },
                {  
                    "cod_sub":15,
                    "des":"Subcategorías GCER Rev.3",
                }
            ]
    	},
        {
            "des": 'Clasificación Actividad Económica y Principales Productos',
            "cod_flujo":[1,2],
            "children":[  
                {  
                    "cod_sub":16,
                    "des":"Actividad Económica",
                },
                {  
                    "cod_sub":17,
                    "des":"Producto",
                }
            ]
    	},
        {
            "des": 'Clasificación Productos Tradicionales y No Tradicionales',
            "cod_flujo":[1,2],
            "children":[  
                {  
                    "cod_sub":18,
                    "des":"Clase (Tradicionales - No Tradicionales)",
                },
                {  
                    "cod_sub":19,
                    "des":"Grupo de Productos",
                },
                {  
                    "cod_sub":20,
                    "des":"Producto",
                }
            ]
    	},
        {
            "des": 'Clasificación Uso o Destino Económico',
            "cod_flujo":[3],
            "children":[  
                {  
                    "cod_sub":21,
                    "des":"CUODE",
                },
                {  
                    "cod_sub":22,
                    "des":"Grupo CUODE",
                },
                {  
                    "cod_sub":23,
                    "des":"Subgrupo CUODE",
                },  {  
                    "cod_sub":24,
                    "des":"Grado de Elaboración CUODE",
                }
            ]
    	},
    ];

    const codFlujo =  parseInt(req.params.codFlujo);
    var cualitativasA = [];

    console.log('codFlujo',codFlujo)

    for (const cualitativa of cualitativas) {
        if (cualitativa.cod_flujo.some(elemento => elemento === codFlujo)) {
            cualitativasA.push(cualitativa);
        }
    }
    cualitativas = cualitativasA

    res.status(200).json({ cualitativas });
}

async function indexSub(req, res) {

    const codSub = req.params.codSub;
    console.log('codSub',codSub)
    let data;
    let tipoRes;
    switch (codSub) {
        case "1":
            data = await sequelize.query('select cod_seccion as cod_niv1, des_seccion  as des_niv1 from nandina group by cod_seccion, des_seccion order by cod_seccion',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listado';
          break;
        case "2":
            data =  await sequelize.query('select cod_seccion as cod_niv2 , des_seccion as des_niv2, cod_capitulo as cod_niv1, des_capitulo as des_niv1 from nandina group by cod_seccion, des_seccion,cod_capitulo, des_capitulo order by des_seccion',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupado';
          break;
        case "3":
            data =  await sequelize.query(' select cod_seccion as cod_niv3,des_seccion as des_niv3, cod_capitulo as cod_niv2, des_capitulo as des_niv2, cod_partida as cod_niv1, des_partida as des_niv1 from nandina group by cod_seccion, des_seccion,cod_capitulo, des_capitulo,cod_partida, des_partida order by cod_capitulo',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupadoDoble';
          break;
        case "4":
            data =  await sequelize.query(' select cod_seccion as cod_niv3,des_seccion as des_niv3, cod_capitulo as cod_niv2, des_capitulo as des_niv2, cod_nandina as cod_niv1, des_nandina as des_niv1 from nandina group by cod_seccion,des_seccion, cod_capitulo, des_capitulo, cod_nandina, des_nandina order by cod_capitulo',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupadoDoble';
          break;
        case "5":
            data =  await sequelize.query('select cod_seccion as cod_niv1, des_seccion as des_niv1 from cuci3 group by cod_seccion, des_seccion order by cod_seccion',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listado';
          break;
        case "6":
            data =  await sequelize.query('select cod_seccion  as cod_niv1, des_seccion  as des_niv2, cod_capitulo  as cod_niv1, des_capitulo  as des_niv1 FROM cuci3 group by cod_seccion, des_seccion, cod_capitulo, des_capitulo order by cod_seccion',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupado';
          break;

        case "7":
            data =  await sequelize.query('select cod_seccion  as cod_niv3, des_seccion as des_niv3 , cod_capitulo as cod_niv2, des_capitulo  as des_niv2, cod_grupo as cod_niv1, des_grupo as des_niv1 FROM cuci3 group by cod_seccion, des_seccion, cod_capitulo, des_capitulo, cod_grupo, des_grupo order by cod_seccion',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupadoDoble';
          break;
        case "8":
            data =  await sequelize.query('select cod_seccion  as cod_niv4, des_seccion  as des_niv4, cod_capitulo as cod_niv3, des_capitulo  as des_niv3, cod_grupo as cod_niv2, des_grupo  as des_niv2, cod_cuci3  as cod_niv1, des_cuci3  as des_niv1 FROM cuci3 group by  cod_seccion, des_seccion,cod_capitulo, des_capitulo, cod_grupo, des_grupo, cod_cuci3, des_cuci3 order by cod_seccion',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupadoTriple';
          break;
        case "9":
            data =  await sequelize.query('select cod_categoria as cod_niv1, des_categoria as des_niv1 FROM ciiu3 group by cod_categoria, des_categoria order by cod_categoria ',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listado';
          break;
        case "10":
            data =  await sequelize.query('select cod_categoria as cod_niv2, des_categoria as des_niv2, cod_division as cod_niv1, des_division as des_niv1 FROM ciiu3 group by cod_categoria, des_categoria, cod_division,des_division order by cod_categoria ',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupado';
          break;
        case "11":
            data =  await sequelize.query('select cod_categoria as cod_niv3, des_categoria as des_niv3, cod_division as cod_niv2 ,des_division as des_niv2, cod_grupo as cod_niv1, des_grupo as des_niv1 from ciiu3 group by cod_categoria, des_categoria, cod_division,des_division, cod_grupo, des_grupo  order by cod_categoria',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupadoDoble';
          break;
        case "12":
            data =  await sequelize.query('select cod_categoria as cod_niv4, des_categoria as des_niv4, cod_division as cod_niv3, des_division as des_niv3, cod_grupo as cod_niv2, des_grupo as des_niv2, cod_ciiu3 as cod_niv1, des_ciiu3 as des_niv1 from ciiu3 group by cod_categoria, des_categoria, cod_division,des_division, cod_grupo, des_grupo, cod_ciiu3, des_ciiu3   order by cod_categoria',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupadoTriple';
          break;
        case "13":
            data =  await sequelize.query('select cod_catego_gran as cod_niv1, des_catego_gran as des_niv1 from gce3 group by cod_catego_gran, des_catego_gran',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listado';
          break;
        case "14":
            data =  await sequelize.query('select cod_catego_gran as cod_niv2, des_catego_gran as des_niv2, cod_catego_bas as cod_niv1, des_catego_bas as des_niv1 from gce3 group by cod_catego_gran, des_catego_gran, cod_catego_bas, des_catego_bas order by cod_catego_gran',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupado';
          break;
        case "15":
            data =  await sequelize.query('select cod_catego_gran as cod_niv3, des_catego_gran as des_niv3, cod_catego_bas as cod_niv2, des_catego_bas as des_niv2, cod_gce3 as cod_niv2, des_gce3 as des_niv1 from gce3 group by cod_catego_gran, des_catego_gran, cod_catego_bas, des_catego_bas, cod_gce3, des_gce3 order by cod_catego_gran',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupadoDoble';
          break;
        case "16":
            data =  await sequelize.query('select cod_actividad as cod_niv1, des_actividad as des_niv1 from actividad order by cod_actividad',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listado';
         break;

         case "17":
            data =  await sequelize.query('select cod_actividad as cod_niv2, des_actividad as des_niv2, cod_acteco as cod_niv1, des_acteco as des_niv1 from acteco group by cod_actividad, des_actividad, cod_acteco, des_acteco order by cod_actividad',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupado';
         break;

         case "18":
            data =  await sequelize.query('select cod_tradicional as cod_niv1, des_tradicional as des_niv1  from tnt where cod_tradicional is not null group by cod_tradicional , des_tradicional',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listado';
         break;

         case "19":
            data =  await sequelize.query(' select cod_tradicional_clase as cod_niv2 ,des_tradicional_clase as des_niv2,cod_tradicional as cod_niv1,des_tradicional as des_niv1 from tnt where cod_tradicional is not null group by cod_tradicional_clase,des_tradicional_clase,cod_tradicional,des_tradicional ',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupado';
         break;

         case "20":
            data =  await sequelize.query('select cod_tradicional as cod_niv3,des_tradicional as des_niv3, cod_tradicional_clase as cod_niv2, des_tradicional_clase as des_niv2, cod_tnt as cod_niv1,des_tnt as des_niv1 from tnt where cod_tradicional is not null group by cod_tradicional_clase,des_tradicional_clase,cod_tradicional,des_tradicional,cod_tnt,des_tnt order by cod_tradicional_clase',{type: Sequelize.QueryTypes.SELECT});
            tipoRes = 'listadoAgrupadoDoble';
         break;
        default:
            data = "Ese no es un dato válido";
            tipoRes = '';
      }
    
      return res.status(200).json({tipoRes:tipoRes,data: data});
}


module.exports = {
    index,indexSub
}


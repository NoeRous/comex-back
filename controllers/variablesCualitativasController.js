function index(req, res) {
    var cualitativas =   [
    	{
            "des": 'Productos según la Nomenclatura Común de Designación y Codificación de Mercancías de Países Miembros de la Comunidad Andina (NANDINA)',
            "children":[  
                {  
                    "des":"Sección NANDINA",
                },
                {  
                    "des":"Capítulo NANDINA",
                },
                {  
                    "des":"Partida NANDINA",
                },
                {  
                    "des":"NANDINA",
                }
            ]
    	},
        {
            "des": 'Clasificación Uniforme del Comercio Internacional (CUCI Rev.3)',
            "children":[  
                {  
                    "des":"Sección CUCI Rev.3",
                },
                {  
                    "des":"Capítulo CUCI Rev.3",
                },
                {  
                    "des":"Grupo CUCI Rev.3",
                },
                {  
                    "des":"Subgrupo CUCI Rev.3",
                }
            ]
    	},
        {
            "des": 'Clasificación Internacional Industrial Uniforme (CIIU Rev.3)',
            "children":[  
                {  
                    "des":"Categoría de Tabulación CIIU Rev.3",
                },
                {  
                    "des":"División CIIU Rev.3",
                },
                {  
                    "des":"Grupo CIIU Rev.3",
                },
                {  
                    "des":"Clase de Actividad CIIU Rev.3",
                }
            ]
    	},
        {
            "des": 'Clasificación Grandes Categorías Económicas (GCE Rev.3)',
            "children":[  
                {  
                    "des":"Grandes Categorías GCE Rev.3",
                },
                {  
                    "des":"Categorías Básicas GCE Rev.3",
                },
                {  
                    "des":"Subcategorías GCER Rev.3",
                }
            ]
    	},
        {
            "des": 'Clasificación Actividad Económica y Principales Productos',
            "children":[  
                {  
                    "des":"Actividad Económica",
                },
                {  
                    "des":"Producto",
                }
            ]
    	},
        {
            "des": 'Clasificación Productos Tradicionales y No Tradicionales',
            "children":[  
                {  
                    "des":"Clase (Tradicionales - No Tradicionales)",
                },
                {  
                    "des":"Grupo de Productos",
                },
                {  
                    "des":"Producto",
                }
            ]
    	},
    ];
    res.status(200).json({cualitativas});
}

module.exports = {
    index
}


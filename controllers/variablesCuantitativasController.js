function index(req, res) {

    var cuantitativas =   [
    	{
            "cod_cuantitativa": 1,
    		"des": "Peso Bruto (Kg.)",
            "cod_flujo":1
    	},
    	{
            "cod_cuantitativa": 2,
    		"des": "Peso Neto (Kg.)",
            "cod_flujo":1
    	},
    	{
            "cod_cuantitativa": 3,
    		"des": "Valor FOB ($us.)",
            "cod_flujo":1
    	},
        {
            "cod_cuantitativa": 1,
    		"des": "Peso Bruto (Kg.)",
            "cod_flujo":2
    	},
    	{
            "cod_cuantitativa": 2,
    		"des": "Peso Neto (Kg.)",
            "cod_flujo":2
    	},
    	{
            "cod_cuantitativa": 3,
    		"des": "Valor FOB ($us.)",
            "cod_flujo":2
    	},
    	{
            "cod_cuantitativa": 1,
    		"des": "Peso Bruto (Kg.)",
            "cod_flujo":3
    	},
        {
            "cod_cuantitativa": 2,
    		"des": "Peso Neto (Kg.)",
            "cod_flujo":3
    	},
        {
            "cod_cuantitativa": 3,
    		"des": "Valor FOB ($us.)",
            "cod_flujo":3
    	},
        {
            "cod_cuantitativa": 4,
    		"des": "Gravamenes Pagados (Bs.)(1)",
            "cod_flujo":3
    	},
        {
            "cod_cuantitativa": 5,
    		"des": "Valor ($us.)",
            "cod_flujo":4
    	}
    ];
    res.status(200).json({cuantitativas});
}

module.exports = {
    index
}
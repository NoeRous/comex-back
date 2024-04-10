function index(req, res) {

    var flujos =  [
    	{
            "cod_flujo": 1,
    		"des": "Exportaciones"
    	},
    	{
            "cod_flujo": 2,
    		"des": "Reexportaciones"
    	},
    	{
    		"cod_flujo": 3,
    		"des": "Importaciones"
    	},
    	{
    		"cod_flujo": 4,
    		"des": "Saldo Comercial"
    	}
    ];

    res.status(200).json({flujos});
}

module.exports = {
    index
}
function index(req, res) {

    var departamentos = [];

    res.status(200).send(departamentos);
    
}


module.exports = {
    index
}
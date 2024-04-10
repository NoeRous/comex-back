function index(req, res) {

    var flujos = [];

    res.status(200).send(flujos);
}


module.exports = {
    index
}
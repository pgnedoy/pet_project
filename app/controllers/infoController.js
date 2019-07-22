const infoService = require('../services/infoService');

const infoController = async (req, res) => {
    const info = req.body.info;

    const result = await infoService.setToDb(info);

    res.send(result);
}

module.exports = infoController;
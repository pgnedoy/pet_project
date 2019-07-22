const infoRepository = require('../repositories/infoRepository');

const setToDb = (info) => {
    return infoRepository.setToDb(info);
}

module.exports = {
    setToDb,
}
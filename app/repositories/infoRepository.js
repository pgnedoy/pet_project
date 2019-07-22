const db = require('../middlewares/database').mysqlDB;

const setToDb = async (info) => {
    const query = `INSERT INTO message (test) VALUES ('${info}');`
    await db.query(query);

    return { message: 'ok'};
}

module.exports = {
    setToDb,
}
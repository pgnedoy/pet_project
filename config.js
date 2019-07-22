const config = {
    server: {
        hostname: process.env.HOST || 'localhost',
        port: process.env.PORT || 6021,
    },
    database: {
        host: process.env.DB_URL || 'localhost',
        database: process.env.DB_DATABASE || 'pet_project',
        charset: 'UTF8MB4_UNICODE_CI',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || ''
    },
}

module.exports = config;
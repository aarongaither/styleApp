'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
// const env       = process.env.NODE_ENV || 'development';
// const config    = require(__dirname + '/../config/config.json')[env];
const db = {};
let sequelize;

const connInfo = process.env.JAWSDB_URL || {
    port: 3306,
    host: "127.0.0.1",
    user: "root",
    password: "Iilali00_",
    database: "stylistApp"
}

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(connInfo.database, connInfo.user, connInfo.password, {
        host: connInfo.host,
        dialect: 'mysql'
    });
}

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;

db.Sequelize = Sequelize;

module.exports = db;
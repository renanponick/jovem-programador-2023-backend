const Cachorro = require('./cachorro.js');
const { DataTypes } = require('sequelize');
const sequelize = require('../database.js');

const Pessoa = sequelize.define('pessoas', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false
});

Cachorro.belongsTo(Pessoa, { foreignKey: 'pessoaId' });
Pessoa.hasMany(Cachorro, { foreignKey: 'pessoaId' });

module.exports = Pessoa;

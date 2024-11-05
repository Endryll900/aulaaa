const sequelizeDb = require('sequelize')
const sequelizeConfig = new sequelizeDb(
    'empresa',// O nome do banco de dados
    'root', // nome de usuario de banco
    '', // senha do banco de dados 

    {
        dialect:'sqlite',
        storage: './empresa.sqlite'
    }
)

module.exports = {sequelizeDb, sequelizeConfig}
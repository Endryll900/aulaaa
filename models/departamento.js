const {sequelizeDb, sequelizeConfig} = require('./database')

//CRIANDO TABELA
const departamento = sequelizeConfig.define(
    'departamento',
        {
            nome:{type:sequelizeDb.STRING},
            descricao:{type:sequelizeDb.STRING}
        }
)

departamento.sync() 
module.exports = departamento
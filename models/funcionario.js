const {sequelizeDb, sequelizeConfig} = require('./database')//estamos utilizando o recurso de desestruturação de objetos para importar apenas os módulos necessários
const departamento = require('./departamento')//
//importando a tabela departamento

//CRIANDO A TABELA
const funcionario = sequelizeConfig.define(
      'funcionario',// nome da tabela

        {
            nome:{type:sequelizeDb.STRING},
            salario:{type:sequelizeDb.STRING},
            cargo:{type:sequelizeDb.STRING}
        }
)
/*
Não iremos criar os campos'id funcionario' e a chave estrangeira, pois o sequelize irá criar esses campos automaticamente,ou seja, tanto a chave primária quanto a chave estrangeira são criados pelo sequelize
*/
// CONFIGURAR A CHAVE ESTRANGEIRA
//Estou dizendo que departamento possui muitos funcionarios

departamento.hasMany(funcionario,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
funcionario.belongsTo(departamento)//Estou dizendo que funcionario pertencea apenas a 1 departamento
funcionario.sync()
module.exports = funcionario



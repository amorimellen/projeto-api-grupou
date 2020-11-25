const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const questao = sequelize.define(name,{
    desc: {
        type: DataTypes.TEXT
    },
    data_cricao: {
        type: DataTypes.DATE,
        field:'criacao'
    }, 
    data_atualizacao: {
        type: DataTypes.DATE,
        field:'atualizacao'
    }
},{
    sequelize,
    tableName: name
});

questao.associate = (models) =>{
    questao.belongsTo(models.usu, {
        foreignKey:{
            name:'id_usuario'
        },
        as:'usuario'
    })
    questao.belongsTo(models.hardskill, {
        foreignKey:{
            name:'id_hardskill'
        },
        as:'hardskill'
    })
}

module.exports = questao;

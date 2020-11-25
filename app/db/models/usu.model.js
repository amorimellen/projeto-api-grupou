const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const usu = sequelize.define(name,{
    login:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    senha:{
        type: DataTypes.STRING(20),
        allowNull:false,
    },

},{
    sequelize,
    tableName: name
});

usu.associate = (models)=>{
    usu.hasOne(models.aluno, {
        foreignKey:{
            name:'id_usuario'
        },
        as:'aluno'
    })
    usu.hasMany(models.questao, {
        foreignKey:{
            name:'id_usu'
        },
        as:'questoes'
    })
    usu.hasOne(models.prof, {
        foreignKey:{
            name:'id_usu'
        },
        as:'professor'
    })
}

module.exports = usu;

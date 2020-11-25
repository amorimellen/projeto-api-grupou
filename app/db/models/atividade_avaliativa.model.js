const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const atividade_avaliativa = sequelize.define(name,{
    descricao:{
        type: DataTypes.STRING(50)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

atividade_avaliativa.associate = (models)=>{
    atividade_avaliativa.belongsTo(models.turma, {
        foreignKey:{
            name:'id_turma'
        },
        as:'turma'
    })

    atividade_avaliativa.hasMany(models.grupo, {
        foreignKey:{
            name:'id_atividade_avaliativa'
        },
        as:'grupo'
    })

    atividade_avaliativa.hasMany(models.avaliacao_360, {
        foreignKey:{
            name:'id_atividade_avaliativa'
        },
        as:'avaliacao360'
    })

    atividade_avaliativa.belongsToMany(models.hardskill, {
        through: 'atividadeav_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_atividade_avaliativa'
        },
        as:'hardskill' 
     })
    
    
}

module.exports = atividade_avaliativa;

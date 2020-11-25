const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const grupo = sequelize.define(name,{
    nome:{
        type: DataTypes.STRING(20)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

grupo.associate = (models)=>{
    
    grupo.hasMany(models.tarefa, {
        foreignKey:{
            name:'id_grupo'
        },
        as:'tarefa'
    })
    grupo.belongsTo(models.turma, {
        foreignKey:{
            name:'id_turma'
        },
        as:'turma'
    })

    grupo.belongsToMany(models.aluno, {
        through: 'aluno_grupo',
        timestamps:false,
        foreignKey:{
            name:'id_grupo'
        },
        as:'aluno' 
     })

     grupo.belongsTo(models.atividade_avaliativa, {
        foreignKey:{
            name:'id_atividade_avaliativa'
        },
        as:'atividadeav'
    })

    grupo.hasMany(models.avaliacao_360, {
        foreignKey:{
            name:'id_grupo'
        },
        as:'avaliacao360'
    })
    
}

module.exports = grupo;

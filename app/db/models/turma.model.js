const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const turma = sequelize.define(name,{
    numero:{
        type: DataTypes.STRING(15)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

turma.associate = (models)=>{
    turma.belongsTo(models.disciplina, {
        foreignKey:{
            name:'id_disciplina'
        },
        as:'disciplina'
    })

    turma.belongsToMany(models.prof, {
        through: 'professor_turma',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'professor' 
     })
     turma.belongsToMany(models.hardskill, {
        through: 'turma_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'hardskill' 
     })

     turma.belongsToMany(models.curso, {
        through: 'curso_turma',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'curso' 
     })

     turma.belongsToMany(models.aluno, {
        through: 'aluno_turma',
        timestamps:false,
        foreignKey:{
            name:'id_turma'
        },
        as:'aluno' 
     })

     turma.hasMany(models.grupo, {
        foreignKey:{
            name:'id_turma'
        },
        as:'grupo'
    })

    turma.hasMany(models.atividade_avaliativa, {
        foreignKey:{
            name:'id_turma'
        },
        as:'atividade_avaliativa'
    })
    
}

module.exports = turma;

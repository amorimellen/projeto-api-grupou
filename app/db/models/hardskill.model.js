const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const hard_skill = sequelize.define(name,{
    descricao:{
        type: DataTypes.STRING(50)
    },
    data_cricao: {
        type:DataTypes.DATE,
        field:'criacao'
    }, 
    data_atualizacao: {
        type:DataTypes.DATE,
        field:'atualizacao'
    }
},{
    sequelize,
    tableName: name
});

hard_skill.associate = (models) =>{
    hard_skill.belongsToMany(models.aluno, {
        through: 'aluno_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'alunos' 
     })
     hard_skill.hasMany(models.questao, {
        foreignKey:{
            name:'id_hard_skill'
        },
        as:'questoes'
    })
    hard_skill.belongsToMany(models.turma, {
        through: 'turma_hard_skill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'turma' 
     })

     hard_skill.belongsToMany(models.disciplina, {
        through: 'disciplina_hard_skill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'disciplina' 
     })

     hard_skill.belongsToMany(models.atividade_avaliativa, {
        through: 'atividade_avaliativa_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_hardskill'
        },
        as:'atividade_avaliativa' 
     })
}

module.exports = hard_skill;

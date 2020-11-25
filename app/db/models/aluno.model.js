const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const aluno = sequelize.define(name,{
    matricula:{
        type: DataTypes.STRING(20)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

aluno.associate = (models)=>{
    aluno.belongsTo(models.usu, {
        foreignKey:{
            name:'id_usuario'
        },
        as:'usuario'
    })

    aluno.belongsToMany(models.hardskill, {
       through: 'aluno_hardskill',
       timestamps:false,
       foreignKey:{
           name:'id_aluno'
       },
       as:'hardskills' 
    })

    aluno.belongsToMany(models.turma, {
        through: 'aluno_turma',
        timestamps:false,
        foreignKey:{
            name:'id_aluno'
        },
        as:'turma' 
     })

     aluno.belongsTo(models.curso, {
        foreignKey:{
            name:'id_curso'
        },
        as:'curso'
    })

    aluno.hasMany(models.tarefa, {
        foreignKey:{
            name:'id_aluno'
        },
        as:'tarefa'
    })

    aluno.belongsToMany(models.grupo, {
        through: 'aluno_grupo',
        timestamps:false,
        foreignKey:{
            name:'id_aluno'
        },
        as:'grupo' 
     })

     aluno.hasMany(models.avaliacao_360, {
        foreignKey:{
            name:'id_aluno'
        },
        as:'avaliacao360'
    })

    aluno.belongsToMany(models.softskill, {
        through: 'aluno_softskill',
        timestamps:false,
        foreignKey:{
            name:'id_aluno'
        },
        as:'softskill' 
     })
}

module.exports = aluno;

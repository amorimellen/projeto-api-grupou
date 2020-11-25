const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const curso = sequelize.define(name,{
    nome:{
        type: DataTypes.STRING(20)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

curso.associate = (models)=>{
    
    curso.belongsToMany(models.turma, {
        through: 'curso_turma',
        timestamps:false,
        foreignKey:{
            name:'id_curso'
        },
        as:'turma' 
     })

     curso.hasMany(models.aluno, {
        foreignKey:{
            name:'id_curso'
        },
        as:'aluno'
    })

    
    
}

module.exports = curso;

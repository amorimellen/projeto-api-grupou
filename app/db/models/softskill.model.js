const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const soft_skill = sequelize.define(name,{
    descricao:{
        type: DataTypes.STRING(50)
    },
    createdAt: {
        type:DataTypes.DATE,
        field:'criado_em'
    }, 
    updatedAt: {
        type:DataTypes.DATE,
        field:'atualizado_em'
    }
},{
    sequelize,
    tableName: name
});

soft_skill.associate = (models) =>{
    soft_skill.belongsToMany(models.aluno, {
        through: 'aluno_softskill',
        timestamps:false,
        foreignKey:{
            name:'id_softskill'
        },
        as:'alunos' 
     })
    
    soft_skill.belongsToMany(models.avaliacao_360, {
        through: 'avaliacao_360_soft_skill',
        timestamps:false,
        foreignKey:{
            name:'id_softs_kill'
        },
        as:'avaliacao_360' 
     })
}

module.exports = soft_skill;

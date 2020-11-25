const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const tarefa = sequelize.define(name,{
    descricao:{
        type: DataTypes.STRING(50)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

tarefa.associate = (models)=>{
    
    tarefa.belongsTo(models.aluno, {
        foreignKey:{
            name:'id_aluno'
        },
        as:'aluno'
    })

    tarefa.belongsTo(models.grupo, {
        foreignKey:{
            name:'id_grupo'
        },
        as:'grupo'
    })
    
    
}

module.exports = tarefa;

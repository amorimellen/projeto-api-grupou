const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const avaliacao_360 = sequelize.define(name,{
    descricao:{
        type: DataTypes.STRING(30)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

avaliacao_360.associate = (models)=>{
    avaliacao_360.belongsTo(models.grupo, {
        foreignKey:{
            name:'id_grupo'
        },
        as:'grupo'
    })

    avaliacao_360.belongsTo(models.aluno, {
        foreignKey:{
            name:'id_aluno'
        },
        as:'aluno'
    })

    avaliacao_360.belongsTo(models.atividade_avaliativa, {
        foreignKey:{
            name:'id_atividade_avaliativa'
        },
        as:'atividadeav'
    })

    avaliacao_360.belongsToMany(models.softskill, {
        through: 'avaliacao_360_softskill',
        timestamps:false,
        foreignKey:{
            name:'id_avaliacao_360'
        },
        as:'softskill' 
     })
    
    
}

module.exports = avaliacao_360;

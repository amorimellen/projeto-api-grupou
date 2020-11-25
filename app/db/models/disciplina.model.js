const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const disciplina = sequelize.define(name,{
    nome:{
        type: DataTypes.STRING(10)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

disciplina.associate = (models)=>{
    disciplina.belongsToMany(models.prof, {
        through: 'professor_disciplina',
        timestamps:false,
        foreignKey:{
            name:'id_disciplina'
        },
        as:'professor' 
     })

     disciplina.hasMany(models.turma, {
        foreignKey:{
            name:'id_disciplina'
        },
        as:'turma'
    })

    disciplina.belongsToMany(models.hardskill, {
        through: 'disciplina_hardskill',
        timestamps:false,
        foreignKey:{
            name:'id_disciplina'
        },
        as:'hardskill' 
     })

}

module.exports = disciplina;

const {DataTypes} = require('sequelize');
const sequelize = require('../index').getConnection();
const name = require('path').basename(__filename.replace('.model',''),'.js');

const prof = sequelize.define(name,{
    matricula:{
        type: DataTypes.STRING(20)
    }
},{
    sequelize,
    tableName: name,
    timestamps:false
});

prof.associate = (models)=>{
    prof.belongsTo(models.usu, {
        foreignKey:{
            name:'id_usuario'
        },
        as:'usuario'
    })

    prof.belongsToMany(models.disciplina, {
        through: 'prof_disciplina',
        timestamps:false,
        foreignKey:{
            name:'id_professor'
        },
        as:'disciplina' 
     })

     prof.belongsToMany(models.turma, {
        through: 'prof_turma',
        timestamps:false,
        foreignKey:{
            name:'id_professor'
        },
        as:'turma' 
     })

}

module.exports = prof;

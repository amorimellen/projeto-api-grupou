const models = require('../db/models');


exports.index = async ()=>{
    const result = await models.usu.findAll({
        include:['aluno','professor','questoes']
    });
    return result
}

exports.show = async (id)=>{
    const result = await models.usu.findByPk(id);
    return result
}

exports.store = async (usuario)=>{
    const result = await models.usu.create(usuario, {
        include:['aluno','questoes','professor']
    });
    return result
}

exports.update = async (usuario, id)=>{
    const result = await models.usu.update(usuario, {
        where: {id:id}
    })
    return result
}

exports.destroy = async (id)=>{
    const result = await models.usu.destroy({
        where: {id:id}
    })
    return result
}
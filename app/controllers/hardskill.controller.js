const models = require('../db/models');

exports.index = async ()=>{
    const result = await models.hardskill.findAll();
    return result
}

exports.show = async (id)=>{
    const result = await models.hardskill.findByPk(id);
    return result
}

exports.store = async (hardskill)=>{
    const result = await models.hardskill.create(hardskill, {
        include:['questoes']
    });
    return result
}

exports.update = async (hardskill, id)=>{
    const result = await models.hardskill.update(hardskill, {
        where: {id:id}
    })
    return result
}

exports.destroy = async (id)=>{
    const result = await models.hardskill.destroy({
        where: {id:id}
    })
    return result
}
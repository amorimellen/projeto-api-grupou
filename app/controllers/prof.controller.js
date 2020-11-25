const models = require('../db/models');


exports.index = async ()=>{
    const result = await models.prof.findAll({
        include:{all: true}
    });
    return result
}

exports.show = async (id)=>{
    const result = await models.prof.findByPk(id, {
        include:{all: true}
    });
    return result
}

exports.store = async (professor)=>{
    const result = await models.prof.create(professor, {
        include:{all: true}
    });
    return result
}

exports.update = async (professor, id)=>{
    const result = await models.prof.update(professor, {
        where: {id:id}
    });
    return result
}

exports.destroy = async (id)=>{
    const result = await models.prof.destroy({
        where: {id:id}
    });
    return result
}
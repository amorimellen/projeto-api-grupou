const models = require('../db/models');


let newAluno_hardskill = [];
exports.store = async (obj, id_aluno)=>{
    const aluno = await models.aluno.findOne({
        where: {id : id_aluno}
    })
    
    for (let cont in obj.hardskills){
        let hardskill = obj.hardskills[cont];
        console.log(hardskill);

        const [resultado] = await models.hardskill.findOrCreate({
            where: hardskill
        })

        newAluno_hardskill.push(resultado.id)
   
   
    }

    aluno.addHardskill(newAluno_hardskill)
    newAluno_hardskill = [];

    return true
}

exports.destroy = async (obj, id_aluno)=>{
    const aluno = await models.aluno.findOne({
            where: {id : id_aluno}
        })
        
        for (let cont in obj.hardskills){
            let hardskill = obj.hardskills[cont];
            console.log(hardskill);

            const [resultado] = await models.hardskill.findOrCreate({
                where: hardskill
            })

            newAluno_hardskill.push(resultado.id)
    
    
        }

        aluno.removeHardskill(newAluno_hardskill)
        newAluno_hardskill = [];
        
        return true
}

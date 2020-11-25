module.exports = (()=>{

    const aluno_HS_Controller = require('../controllers/aluno_hardskills.controller');

    var router = require('express').Router();

    router.post("/:id", async (req,res)=>{
        const HS = await aluno_HS_Controller.store(req.body, req.params.id);
        res.json(HS);
    })

    router.delete("/:id", async(req,res)=>{
        const HS = await aluno_HS_Controller.destroy(req.body, req.params.id);
        res.json(HS); 
    })

    return router
})()
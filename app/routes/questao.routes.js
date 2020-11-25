module.exports = (()=>{

    const questao_Controller = require('../controllers/questao.controller');

    var router = require('express').Router();

    router.post("/", async (req,res)=>{
        const questao = await questao_Controller.store(req.body);
        res.json(questao);
    })

    router.get("/", async (req,res)=>{
        const questao = await questao_Controller.index();
        res.json(questao);
    })

    router.get("/:id", async (req,res)=>{
        const questao = await questao_Controller.show(req.params.id);
        res.json(questao);
    })

    router.put("/:id", async (req,res)=>{
        const questao = await questao_Controller.update(req.body, req.params.id);
        res.json(questao);
    })

    router.delete("/:id", async(req,res)=>{
        const questao = await questao_Controller.destroy(req.params.id);
        res.json(questao); 
    })

    return router
})()
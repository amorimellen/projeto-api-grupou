module.exports = (()=>{

    const HS_Controller = require('../controllers/hardskill.controller');

    var router = require('express').Router();

    router.post("/", async (req,res)=>{
        const HS = await HS_Controller.store(req.body);
        res.json(HS);
    })

    router.get("/", async (req,res)=>{
        const HS = await HS_Controller.index();
        res.json(HS);
    })

    router.get("/:id", async (req,res)=>{
        const HS = await HS_Controller.show(req.params.id);
        res.json(HS);
    })

    router.put("/:id", async (req,res)=>{
        const HS = await HS_Controller.update(req.body, req.params.id);
        res.json(HS);
    })

    router.delete("/:id", async(req,res)=>{
        const HS = await HS_Controller.destroy(req.params.id);
        res.json(HS); 
    })

    return router
})()
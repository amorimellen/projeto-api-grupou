module.exports = (()=>{

    const prof_Controller = require('../controllers/prof.controller');

    var router = require('express').Router();

    router.post("/", async (req,res)=>{
        const prof = await prof_Controller.store(req.body);
        res.json(prof);
    })

    router.get("/", async (req,res)=>{
        const prof = await prof_Controller.index();
        res.json(prof);
    })

    router.get("/:id", async (req,res)=>{
        const prof = await prof_Controller.show(req.params.id);
        res.json(prof);
    })

    router.put("/:id", async (req,res)=>{
        const prof = await prof_Controller.update(req.body, req.params.id);
        res.json(prof);
    })

    router.delete("/:id", async(req,res)=>{
        const prof = await prof_Controller.destroy(req.params.id);
        res.json(prof); 
    })

    return router
})()
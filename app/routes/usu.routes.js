module.exports = (()=>{

    const usuario_Controller = require('../controllers/usu.controller');

    var router = require('express').Router();

    router.post("/", async (req,res)=>{
        const usu = await usuario_Controller.store(req.body);
        res.json(usu);
    })

    router.get("/", async (req,res)=>{
        const usu = await usuario_Controller.index();
        res.json(usu);
    })

    router.get("/:id", async (req,res)=>{
        const usu = await usuario_Controller.show(req.params.id);
        res.json(usu);
    })

    router.put("/:id", async (req,res)=>{
        const usu = await usuario_Controller.update(req.body, req.params.id);
        res.json(usu);
    })

    router.delete("/:id", async(req,res)=>{
        const usu = await usuario_Controller.destroy(req.params.id);
        res.json(usu); 
    })

    return router
})()
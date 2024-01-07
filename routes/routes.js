import express from "express";
const routes = express.Router();

routes.get('/', (req, res)=> {
    return res.json({
        name: "Rogério Soares"
    })
})

export { routes as default };
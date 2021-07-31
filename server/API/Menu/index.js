import express  from "express";
import passport from "passport";

// db model
import {MenuModel,ImageModel} from "../../database/allModels"

const Router = express.Router();
/*
Route    /list
Des      get all the menu based on particular restaurant
params   id
Access   Public
Method   GET
 */
Router.get("/list/:_id" , async (req,res) => {
    try{
        const { _id } = req.params ;
        const menus = await MenuModel.findOne(_id);

        return res.json({ menus });

    }catch ( error ){
        return res.status(500).json({ error : error.message });
    }
})

/*
Route    /image
Des      get all the menu image based on id
params   id
Access   Public
Method   GET
 */
Router.get("/image/:_id" , async (req,res) => {
    try{
        const { _id } = req.params ;
        const menus = await ImageModel.findOne(_id);

        return res.json({ menus });

    }catch ( error ){
        return res.status(500).json({ error : error.message });
    }
})
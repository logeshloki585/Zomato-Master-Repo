import express  from "express";
import passport from "passport";

// db model
import FoodModel from "../../database/allModels"

const Router = express.Router();
/*
Route    /
Des      get all the food based on city
params   none
Access   Public
Method   GET
 */
Router.get("/",async (req,res) => {
    try{
        const { city } = req.query;
        const allRestaurants = await RestaurantModel.find({ city });

        return res.json({ allRestaurants});
    }catch(error){
            return res.status(500).json({error: error.message });
    }
})
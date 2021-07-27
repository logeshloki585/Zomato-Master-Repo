import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Models
import { UserModel } from "../../database/user";

const Router = express.Router();

/*
Route    /signup
Des      signup with email and password
params   none
Access   Public
Method  POST
 */

Router.post("/signup", async (req,res) =>{
    try{
        const {email, password,fullname,phoneNumber}= req.body.credentials;

        // check whether the email exist

        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        if(checkUserByEmail || checkUserByPhone) {
            return res.json({ error : "User already exist"})
        }
        // hashing the password
        const bcryptSalt = await bcrypt.genSalt(8);

        const hashedPassword = await bcrypt.hash(password, bcryptSalt);


        //  save to Db
        await UserModel.create({
            ...req.body.credentials,
            password: hashedPassword,
        });

        // genarate a Jwt token

        const token = jwt.sign({ user : { fullname,email } } ,"ZomatoAPP");

        // return
        return res.status(200).json({token ,status: "succes"})
    }catch(error) {
        return res.status(500).json({ error: error.message});
    }

});

export default Router;
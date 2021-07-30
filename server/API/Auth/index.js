import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Models
import { UserModel } from "../../database/user";
import passport from "passport";

const Router = express.Router();

/*
Route    /signup
Des      register new user
params   none
Access   Public
Method  POST
 */

Router.post("/signup", async (req,res) =>{
    try{
        await UserModel.findByEmailAndPhone(req.body.credentials);
        //  save to Db
        const newUser= await UserModel.create(req.body.credentials);
        // genarate a Jwt token
        const token = newUser.generateJwtToken();
        // return
        return res.status(200).json({token ,status: "succes"})
    }catch(error) {
        return res.status(500).json({ error: error.message});
    }
});

/*
Route    /signin
Des      signup with email and password
params   none
Access   Public
Method  POST
 */

Router.post("/signin", async (req,res) =>{
    try{
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        // genarate a Jwt token
        const token = user.generateJwtToken();
        // return
        return res.status(200).json({token ,status: "succes"})

    }catch(error) {
        return res.status(500).json({ error: error.message});
    }
});

/*
Route    /google
Des      google signin
params   none
Access   Public
Method   GET
 */
Router.get(
    "/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
  )


/*
Route    /google/callback
Des      google signin callback
params   none
Access   Public
Method   GET
 */

Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      return res.json({ token: req.session.passport.user.token });
    }
  );



export default Router;
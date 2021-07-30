// dotenv
require('dotenv').config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// config
import googleConfig from "./config/google.config";

// microservice routes
import Auth from './API/Auth'


// database connection 
import connectDB from './database/connection'

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended : false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport configure
googleConfig(passport);

// application routes
zomato.use("/auth",Auth);


zomato.get("/",(req,res) => 
    res.json({ message :"setup succesful"})
);



zomato.listen( 4000 ,() => 
connectDB()
.then(() => console.log("server is running"))
.catch(() => console.log("server is running database connection is false")) 
); 
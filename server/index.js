import express from "express";
import cors from "cors";
import helmet from "helmet";
import xFrameOptions from "helmet/dist/middlewares/x-frame-options";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended : false }));
zomato.use(helmet());
zomato.use(cors());


zomato.get("/",(req,res) => 
    res.json({ message :"setup succesful"})
);



zomato.listen( 4000 ,() => console.log("server is running"))
import Mongoose from "mongoose";

const menuSchema = new Mongoose.Schema({

    menus :[
        {
            name :{ type :String , required :true},
            items: [
                {
                    type: mongoose.Types.ObjectId,
                    ref : "Foods",
                },
            ],
        },
    ],

    recommended :[
        {
            type : mongoose.Types.ObjectId,
            ref: "Foods",
            unique: true,
        },
    ],

},
{
    timestamps : true,
});

export const MenuModel = Mongoose.model("Menu",MenuSchema);

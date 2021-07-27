import Mongoose, { model }  from "mongoose";

const OrderSchema = new Mongoose.Schema({
    user:{
        type: Mongoose.Types.ObjectId,
        ref:"Users",
    },
    orderDetails: [
        {
            food : { type: mongoose.Types.ObjectId,
            ref : "Foods"},
            quantity : {
                type : Number, required: true
            },
            paymode:{  type: String, required : true},
            status:{  type: String, default : "placed"},
            paymentDetails: {
                 itemTotal :{type : Number, required: true  },
                 promo : {type : Number, required: true},
                 tax : {type : Number, required: true},
            },

        },
    ],
    orderRating: {
        type : Number,
        required : true,
    },
},
{
    timestamps : true,
}
);

export const OrderModel = mongoose.model("Orders",OrderSchema);
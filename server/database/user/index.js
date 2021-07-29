import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    fullname : { type : String, required: true },
    email : { type : String ,required : true},
    password : {type : String},
    address : [{ detail :{ type :String} , for : { type : String}}],
    phoneNumber: [{ type: Number}],
},
{
    timestamps : true,
}
);

UserSchema.methods.generateJwtToken = function() {
    return jwt.sign({user :this._id.toString() } ,"ZomatoAPP");
};

UserSchema.statics.findByEmailAndPhone = async ( {email, phoneNumber}) => {
    // check whether the email exist

    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });

    if(checkUserByEmail || checkUserByPhone) {
        throw new Error("User already exist");
    };
    return false
};

UserSchema.statics.findByEmailAndPassword = async ( {email , password} ) => {
    // check the email exist
    const user = await UserModel.findOne({ email });
    if(!user) throw new Error("user does not exist!!!");

    // compare password
    const doesPassWordMatch = await bcrypt.compare(password , user.password);

    if(!doesPassWordMatch) throw new Error("invalid password!!!");
    return user;
};


UserSchema.pre("save", function (next) {
    const user =this;

    // checking the password is modified
    if(!user.isModified("password")) return next();


    // generate bcrypt salt
    bcrypt.genSalt(8,(error , salt) =>{
        if(error) return next(error);

        // hash password
        bcrypt.hash(user.password,salt,(error,hash) =>{
            if(error) return next(error);

            // assigning hashing password
            user.password = hash;
            return next();
        });
    });
});

export const UserModel = mongoose.model("Users",UserSchema);


import {Schema,model} from "mongoose";



const userSchema = new Schema({
    userName: { type: String, trim: true },
    email: { type: String, trim: true, unique: true, required: true },
    password: { type: String, trim: true, required: true },
    
},
    {
        timestamps: true,
    },
 
);

userSchema.pre('save', function () {
    if (!this.userName) {
        this.userName = this.email;
    }
});

userSchema.methods.toJSON = function () { 
    const obj = this.toObject();
    delete obj.password;
    return obj;
}

export const User = model("User", userSchema);

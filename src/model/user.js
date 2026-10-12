
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     firstName: {
//         type: String,
//         minLength: 4,
//         trim: true,
//         required: true
//     },
//     lastName: {
//         type: String,
//         minLength: 4,
//         trim: true,
//         required: true
//     },
//     emailId: {
//         type: String,
//         lowercase: true,
//         trim: true,
//         required: true,
//         validate: {
//             validator: function(value){
//                 return !value.includes(" ")
//             },
//             message: "can not contain spaces within the emailId!!"
//         }
//     },
//     password: {
//         type: String
//     },
//     age: {
//         type: Number,
//         min: 18
//     },
//     gender: {
//         type: String,
//         enum: ["male", "female", "others"]
//     },
//     profilePic: {
//         type: String,
//         default: "https://images.unsplash.com/photo-1763539818973-ffc4d0a78dae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
//     },
//     about: {
//         type: String,
//         default: "i am the batman and men are brave!!"
//     },
//     skills: {
//         type: [String]
//     }
// });

// export const User = mongoose.model("User", userSchema);
// export default User;

import mongoose from "mongoose";
import validator from "validator";

const noSpace = (value) => {return !value.includes(" ")};
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstName is required!!"],
        trim: true,
        minLength: 4,
        maxLength: 15,
        validate: {
            validator: noSpace,
            message: "no spaces are allowed"
        }
    },
    lastName: {
        type: String,
        required: [true, "lastName is required!!"],
        trim: true,
        minLength: 4,
        maxLength: 15,
        validate: {
            validator: noSpace,
            message: "no spaces are allowed!!"
        }
    },
    emailId: {
        type: String,
        required: [true, "emailId are required!!"],
        trim: true,
        unique: true,
        validate: [{
            validator: noSpace,
            message: "no spaces are allowed!!"
        },{
            validator: function(value) {
                if(!validator.isEmail(value)) {
                    throw new Error("Email is not valid Email!!");
                }
            },
            message: "Email is not a Valid Email!!"
        }]
    },
    password: {
        type: String,
        required: [true, "password is required!!"],
        trim: true,
        validate: [
            {validator: noSpace, message: "no spaces are allowed!!"},
            {validator: function(value){
                const hasLower = /[a-z]/.test(value);
                const hasUpper = /[A-Z]/.test(value);
                const hasNumber = /[0-9]/.test(value);
                return hasLower && hasUpper && hasNumber;
            }, message: "password must contain a lowercase and uppercase and a number character!!"},
            {validator: function(value) {
                if(!validator.isStrongPassword(value)) {
                    throw new Error("Password is not strong!!")
                }
            },
            message: "Password is not Strong!!"
        }
        ]
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 80,
        validate: {
            validator: function(age) {
                return age > 18  && age < 80;
            },
            message: "age must be greater than 18 and smaller than 80"
        }
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "others"],
        validate: {
            validator: function(value) {
                const values = ["male", "female", "others"];
                return values.includes(value);
            },
            message: "age must be male or female or others"
        }
    },
    about: {
        type: String,
        default: "i am the batman and men are brave!!"
    },
    profilePic: {
        type: String,
        default: "https://images.unsplash.com/photo-1763539818973-ffc4d0a78dae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error("url is not valid");
            }
        }
    },
    skills: {
        type: [String]
    }
},{timestamps: true});

export const User = mongoose.model("User", userSchema);
export default User;
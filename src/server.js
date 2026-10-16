
// import express from "express";
// const app = express();
// import mongoose from "mongoose";
// import {connectDB} from "./config/db.js";
// import User from "./model/user.js";

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get("/", (req,res) => {
//     res.send("this is the homepage!!");
// });

// app.get("/user/:id", async(req,res) => {
//     const id = req.params;
//     if(!id) {
//         console.log("user id not provided!!");
//         return res.status(400).send("UserId is not provided!!");
//     };
//     // if(!mongoose.isObjectIdOrHexString(id)) {
//     // if(!mongoose.isValidObjectId(id)) {
//     //     console.log("userId is not valid!!");
//     //     return res.status(400).send("user id is not valid!!");
//     // };
//     try{
//         const user = await User.findById(id);
//         // const user = await User.find({_id: id});
//         if(!user) {
//             console.log("user not found!!");
//             return res.status(404).send("user not  found!!");
//         };
//         console.log(user);
//         return res.status(200).json(user);
//     }catch(err) {
//         console.log("failed to fetch user data!! ",err.message);
//         return res.status(500).send("failed to fetch user data "+err.message);
//     };
// });

// app.get("/all", async(req,res) => {
//     try{
//         const data = await User.find();
//         console.log(data);
//         return res.status(200).json(data);
//     }catch(err) {
//         console.log("failed to fetch users!! ",err.message);
//         return res.status(500).send("failed to fetch users "+err.message);
//     }
// });

// app.post("/user", async(req,res) => {
//     // const id = req.params.id;
//     const data = req.body;
//     // if(!id) {
//     //     console.log("no userId provided!!");
//     //     return res.status(400).send("no userId provided!!");
//     // };
//     if(Object.keys(data).length === 0) {
//         console.log("no data provided!!");
//         return res.status(400).send("no data provided!!");
//     };
//     // if(!mongoose.isObjectIdOrHexString(id)) {
//     //     console.log("UserId is not valid!!");
//     //     return res.status(400).send("userId is not valid!!");
//     // };
//     try{
//         const user = await new User(data).save();
//         console.log(user);
//         return res.status(201).json(user);
//     }catch(err) {
//         console.log("failed to create user!! ",err.message);
//         return res.status(500).send("failed to create user!! "+err.message);
//     }
// });

// app.patch("/user/:id", async(req,res) => {
//     const id = req.params.id;
//     const data = req.body;
//     if(!id) {
//         console.log("no userId provided!!");
//         return res.status(400).send("no userId provided!!");
//     };
//     if(!mongoose.isObjectIdOrHexString(id)) {
//         console.log("UserId is not valid!!");
//         return res.status(400).send("UserId is not valid!!");
//     };
//     if(!data) {
//         console.log("no data provided!!");
//         return res.status(400).send("no user data provied!!");
//     };
//     try{
//         const allowed = ["about", "age", "skills", "profilePic", "password"];
//         const validation = Object.values(data).every((field) => allowed.includes(field));
//         if(!validation) {
//             console.log("field can not be updated!!");
//             throw new Error("field can not be updated!!");
//         };
//         if(Array.isArray(data?.skills) && data?.skills.length > 10)  {
//             console.log("skills must be an array and must be lesss than 10");
//             throw new Error("skills must be an Array and must less than 10!!");
//         };
//         const update = await User.findByIdAndUpdate(id, {$set: {data}}, {runValidators: true, returnDocument: "after"});
//         if(!update) {
//             console.log("user not found!!");
//             return res.status(404).send("user not found!!");
//         };
//         console.log(update);
//         return res.status(200).json(update);
//     }catch(err) {
//         console.log("failed to update the user!! ",err.message);
//         if(err.name === "CasteError") {
//             console.log("validation failed!!");
//             return res.status(400).send("validation  failed!!");
//         };
//         if(err.name === "ValidationError") {
//             console.log("invalid data!!");
//             return res.status(400).json({
//                 msg: "invalid Data!!",
//                 errror: Object.values(err.errors).map((msg) => msg.message),
//             });
//         };
//         return res.status(500).send("failed to update the  user!!"+err.message);
//     }
// });

// app.put("/user/:id", async(req,res) => {
//     const id = req.params.id;
//     const data = req.body;
//     if(!id) {
//         console.Consolelog("no userId provided!!");
//         return res.status(400).send("no UserId provided!!");
//     };
//     if(!mongoose.isObjectIdOrHexString(id)) {
//         console.log("Invalid userId!!");
//         return res.status(400).send("Invalid UserId!!");
//     };
//     if(Object.keys(data).length === 0) {
//         console.log("no data provided!!");
//         return res.status(400).send("no data provided!!");
//     };
//     try{
//         const validate = ["firstName", "lastName", "emailId", "password", "age", "gender", "profilePic", "about", "skills"];
//         const validation = Object.values(validate).every((field) => validate.includes(field));
//         if(!validation) {
//             console.log("field is not allowed!!");
//             throw new Error("field is not allowed!!");
//         };
//         if(Array.isArray(data?.skills) && data?.skills.length > 10) {
//             console.log("skills must be an Array and must be less than 10!!");
//             throw new Error("skills must be an Array and must be less than 10!!");
//         };
//         const man = await User.findOneAndReplace({_id: id}, data, {runValidators: true, returnDocument: true});
//         if(!man) {
//             console.log("user not found!!");
//             return res.status(404).send("user not found!!");
//         };
//         console.log(man);
//         return res.status(200).json(man);
//     }catch(err) {
//         console.log("failed to replace the user Data!! ",err.message);
//         if(err.name === "CasteError") {
//             console.log("invalid data!!");
//             return res.status(400).send("invalid data!!");
//         };
//         if(err.name === "ValidationError") {
//             console.log("validation failed!!");
//             return res.status(400).json({
//                 msg: "validation failed!!",
//                 errors: Object.values(err.errors).map((msg) => msg.message),
//             })
//         };
//         return res.status(500).send("failed to repalce the user data!! "+err.message);
//     }
// });

// app.delete("/user/:id", async(req,res) => {
//     const id = req.params.id;
//     if(!id) {
//         console.log("no UserId provided!!");
//         return res.status(400).send("no userId provided!!");
//     };
//     if(!mongoose.isObjectIdOrHexString(id)) {
//         console.log("userId is not valid!!");
//         return res.status(400).send("userId is not valid!!");
//     };
//     try{
//         await User.findByIdAndDelete(id);
//         console.log("user deleted successfully!!");
//         return res.status(200).send("user deleted successfully!!");
//     }catch(err) {
//         console.log("failed to delete the user!! ",err.message);
//         return res.status(500).send("failed to delete the user!!");
//     }
// });

// connectDB().then(() => {
//     console.log("successfully connected to the database!!");
//     app.listen(4000, () => console.log("server is running on http://localhost:4000"));
// }).catch(err => console.error("failed to connect to the db!! ",err.message));

import express from "express";
const app = express();
import mongoose from "mongoose";
import {connectDB} from "./config/db.js";
import User from "./model/user.js";
import validate from "../utils/validation.js";
import bcrypt from "bcrypt";
import validator from "validator";

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.send("this is the homepage!!");
});

app.get("/user/:id", async(req,res) => {
    const id = req.params.id;
    if(!id) {
        console.log("user id is not provided!!");
        return res.send("userId is not provided!!");
    };
    if(!mongoose.isObjectIdOrHexString(id)) {
        console.log("userId is not valid!!");
        return res.send("userId is not valid!!");
    };
    try{
        const data = await User.findById(id);
        if(!data) {
            console.log("user is not found!!");
            return res.status(404).send("user is not found!!");
        };
        console.log(data);
        return res.status(200).json(data);
    }catch(err) {
        console.log("failed to fetch user data... ",err.message);
        return res.send("failed to fetch user data.. "+err.message);
    }
});

app.get("/all", async(req,res) => {
    try{
        const data = await User.find();
        console.log(data);
        return res.status(200).json(data);
    }catch(err) {
        console.log("failed to fetch the data from the database!!");
        return res.status(500).send("failed to fetch the data from the database!!");
    }
});

// app.post("/user", async(req,res) => {
//     // const data = req.body;
//     try{
//         // validate(req);
//         // const man = await new User(data).save();
//         const man = await new User(req.body).save();
//         console.log(man);
//         return res.status(201).json(man);
//     }catch(err) {
//         console.log("failed to create a user!!",err.message);
//         return res.status(500).send("failed to create a user!!");
//     }
// });

// app.post("/user", async(req,res) => {
//     const data = req.body;
//     if(Object.keys(data).length === 0) {
//         console.log("no data provided!!");
//         return res.status(400).send("no data provided!!");
//     };
//     try{
//         validate(data);
//         const user = await new User(data).save();
//         console.log(user);
//         return res.status(201).json(user);
//     }catch(err) {
//         console.log("failed to create a user!! ",err.message);
//         return res.status(400).send("failed to create a user!!"+err.message);
//     };
// });

app.get("/getuser", async(req,res) => {
    const email = req.body;
    if(!email) {
        console.log("no provided!!");
        return res.status(400).send("no emailId provided!!");
    };
    if(!validator.isEmail(email.email)) {
        console.log("not a valid emailId!!");
    };
    try{
        const user = await User.findOne({emailId: email.email});
        if(!user) {
            console.log("no user found!!");
            return res.status(404).send("no user found!!");
        };
        console.log(user);
        return res.status(200).json(user);
    }catch(err) {
        console.log("failed to fetch the user!! ",err.message);
        return res.status(500).send("failed to fetch the user!! "+err.message);
    }
});

app.post("/signup", async(req,res) => {
    const {firstName, lastName, emailId, password, age, gender, skills} = req.body;
    if(Object.keys(req.body).length === 0) {
        console.log("no data provided!!");
        return res.status(400).send("no data provided!!");
    };
    try{
        if(req.body?.skills.length > 10) {
            throw new Error("skills can not be more than 10!!");
        };
        validate(req.body);
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        const user = await new User({firstName, lastName, emailId,password: hashedPassword, age, gender, skills}).save();
        console.log(user);
        const data = user.toObject();
        delete data.password;
        return res.status(201).json(data);
    }catch(err) {
        console.log("failed to create a user!! ",err.message);
        return res.status(500).send("failed to create a user!! "+err.message);
    }
});

// app.post("/login", async(req,res) => {
//     const {emailId, password} = req.body;
//     if(Object.keys(req.body).length === 0) {
//         console.log("no data provided!!");
//         return res.status(400).send("no data provided!!");
//     };
//     if(!validator.isEmail(emailId)) {
//         console.log("not a valid emailId!!");
//         return res.status(400).send("not a valid email!!");
//     };
//     try{
//         const user = await User.findOne({emailId: emailId});
//         if(!user) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         };
//         const verify = await bcrypt.compare(password, user.password);
//         if(!verify) {
//             throw new Error("logedin failed!!");
//         }else {
//             console.log("user logedin successfully!!");
//             return res.status(200).send("user logedin successfully!!");
//         };
//     }catch(err) {
//         console.log("failed to logedin!! ",err.message);
//         return res.status(500).send("failed to logedin!! "+err.message);
//     }
// });

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body || {};

    // 1. Guard against empty body or missing fields
    if (!emailId || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // 2. Validate email format
    if (!validator.isEmail(emailId)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // 3. Find user
    // const user = await User.findOne({ emailId: emailId.trim() });
    const user = await User.findOne({emailId: emailId.trim()}).select("+password");
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // 4. Verify password (both arguments are guaranteed strings)
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // 5. Successful login
    return res.status(200).json({
      message: "User logged in successfully",
      userId: user._id
    });

  } catch (err) {
    console.error("Login processing error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

// app.post("/login", async(req,res) => {
//     const {emailId, password} = req.body;
//     if(!validator.isEmail(emailId)) {
//         console.log("invalid emailId");
//         return res.status(400).send("invalid emailId");
//     };
//     if(Object.keys(req.body).length === 0) {
//         console.log("no data provided!!");
//         return res.status(400).send("no data provided!!");
//     };
//     try{
//         const user = await User.findOne({emailId: emailId});
//         if(!user) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         };
//         const validate = await bcrypt.compare(password, user.password);
//         if(!validate) {
//             console.log("Invalid credential!!");
//             return res.status(409).send("no valid credential!!");
//         }else {
//             console.log("user loged in successfully!!");
//             return res.status(200).send("user loged in successfully!!");
//         };
//     }catch(err) {
//         console.log("failed to logedin !!",err.message);
//         return res.status(500).send("failed to logedin!! "+err.message);
//     }
// });

// app.post("/login", async(req,res) => {
//     const {emailId, password} = req.body;
//     if(!validator.isEmail(emailId)) {
//         console.log("not a valid email!!");
//         return res.status(400).send("not a valid emailId");
//     };
//     if(Object.keys(req.body).length === 0) {
//         console.log("no data provided!!");
//         return res.status(400).send("no data provided!!");
//     };
//     try{
//         const user = await User.findOne({emailId: emailId});
//         if(!user) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         };
//         const verify = await bcrypt.compare(password, user.password);
//         if(!verify) {
//             console.log("invalid credential!!");
//             return res.status(409).send("invalid crendential!!");
//         }else {
//             console.log("logedin successfully!!");
//             return res.status(200).send("logedin successfully!!");
//         };
//     }catch(err) {
//         console.log("failed to loged in!! ",err.message);
//         return res.status(500).send("failed to logedin!! "+err.message);
//     };
// });

// app.post("/login", async(req,res) => {
//     try{
//         const {emailId, password} = req.body;
//         // if(Object.keys(req.body).length === 0) {
//         //     throw new Error("No credential provided!!");
//         // };
//         // if(!validator.isEmail(emailId)) {
//         //     throw new Error("Not a valid credential!!");
//         // };
//         const user = await User.findOne({emailId: emailId});
//         if(!user) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         };
//         const validate = await bcrypt.compare(password, user.password);
//         if(!validate) {
//             console.log("not a valid user!!");
//             throw new Error("not a valid user!!");
//         }else {
//             console.log("user logedin successfully!!");
//             return res.status(200).send("user logedin successfully!!");
//         };
//     }catch(err) {
//         console.log("failed to login!! ",err.message);
//         return res.status(500).send("failed to logedin!! "+err.message);
//     };
// });

app.patch("/user/:id", async(req,res) => {
    const userId = req.params.id;
    const data = req.body;
    if(!userId) {
        console.log("userid is not provided!!");
        return res.status(400).send("userId is not  provided!!");
    };
    if(Object.values(data).length === 0) {
        console.log("no data is provided!!");
        return res.status(400).send("no data is provided!!");
    };
    if(!mongoose.isObjectIdOrHexString(userId)) {
        console.log("userId is not valid!!");
        return res.status(400).send("userId is not valid!!");
    };
    try{
        const allowed = ["password", "about", "profilePic", "skills", "age"];
        const validation = Object.keys(allowed).every((field) => allowed.includes(field));
        if(!validation) {
            console.log("field can not be update!!");
            throw new Error("field can not be updated!!");
        };
        if(Array.isArray(data?.skills) && data?.skills.length > 10) {
            console.log("skills must be an array and must be less than 10");
            throw new Error("skills must be an array and must be less than 10!!");
        };
        const man = await User.findByIdAndUpdate(userId, {$set: data}, {runValidators: true, returnDocument: "after"});
        if(!man) {
            console.log("no user found!!");
            return res.status(404).send("user not found!!");
        };
        console.log(man);
        return res.status(200).json(man);
    }catch(err) {
        console.log("failed to update the user!! ",err.message);
        if(err.name === "CastError") {
            return res.status(400).send("validation error "+err.message);
        };
        if(err.name === "ValidationError"){
            // return res.status(400).send("validation error ",err.message);
            return res.status(400).json({
                msg: "validation failed!!",
                errors: Object.values(err.errors).map(msg => msg.message),
            });
        };
        return res.status(500).send("failed to update the user!!"+err.message);
    }
});

app.put("/user/:id", async(req,res) => {
    const id = req.params.id;
    const data = req.body;
    if(!id) {
        console.log("no UserId provided!!");
        return res.status(400).send("no userId provided!!");
    };
    if(!mongoose.isObjectIdOrHexString(id)) {
        console.log("not a valid userId");
        return res.status(400).send("not a valid userId");
    };
    if(Object.keys(data).length === 0) {
        console.log("no user data provided!!");
        return res.status(400).send("no data provided!!");
    };
    try{
        if(data?.id || data?.email) {
            throw new Error("UserId and email can not be replaced!!")
        };
        const man = await User.findOneAndReplace({_id: id}, data, {runValidators: true, returnDocument: "after"});
        if(!man) {
            console.log("user not found!!");
            return res.status(404).send("user not found!!");
        };
        console.log(man);
        return res.status(200).json(man);
    }catch(err) {
        console.log("failed to replace the user!!",err.message);
        return res.status(500).send("failed to replace the data!! ",err.message);
    };
});


connectDB().then(() => {
    console.log("successfully connected to the database!!");
    app.listen(4000, () => console.log("server is running on http://localhost:4000"));
}).catch(err => console.log("failed to connect to the database!!",err.message));
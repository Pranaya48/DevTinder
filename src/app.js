// import express from "express";
// const app = express();

// app.use("/", (req,res) => {
//     res.send("this is the homepage");
// });

// app.use("/about", (req,res) => {
//     res.send("this is the about page");
// });

// app.use("/user", (req,res)=> {
//     res.send("this is the user page");
// });
// app.listen(7777, () => console.log("server is running on http://localhost:7777"));

import express from "express";
const app = express();

app.get("/", (req,res) =>{
    res.send("this is the homepage");
});

app.get("/about", (req,res)=> {
    res.send("this is the about page");
});

app.get("/info", (req,res) =>{
    res.send("this is the info  page");
});

app.listen(7777, () => console.log("server is running on http://localhost:7777"));
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

// import express from "express";
// const app = express();

// app.get("/", (req,res) =>{
//     res.send("this is the homepage");
// });

// app.get("/about", (req,res)=> {
//     res.send("this is the about page");
// });

// app.get("/info", (req,res) =>{
//     res.send("this is the info  page");
// });

// app.listen(7777, () => console.log("server is running on http://localhost:7777"));

// import express from "express";
// const app = express();

// app.use("/user/12", (req,res) => {
//     res.send("this is the user page");
// });

// app.use("/info", (req,res) => {
//     res.send("this is the info page");
// });

// app.use("/order", (req,res) => {
//     res.send("this  is the order page");
// });
// app.use("/", (req,res) => {
//     res.send("this is the homepage");
// });

// app.get("/", (req,res) =>{
//     res.send("this is the homepage");
// });

// app.get("/USER", (req,res) => {
//     res.send("this is the user page");
// });

// app.get("/info", (req,res) => {
//     res.send("the is the info page");
// });

// app.get("/Order", (req,res) => {
//     res.send("this is the order page");
// });

// app.listen(4000, () => console.log("server is running on http:localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res) => {
//     res.send("this is the homepage");
// });

// app.get("/user", (req,res) => {
//     res.send("this is the user page");
// });

// app.get("/info", (req,res) => {
//     res.send("this is the info page");
// });

// app.get("/about", (req,res) => {
//     res.send("this is the about page");
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.use("/", (req,res) => {
//     res.send("Hoemlander is a great man");
// });
// app.get("/user", (req,res) => {
//     res.send({name: "steve smith", prof: "cricketer"});
// });

// app.post("/user", (req,res) => {
//     res.send({name: "walter white", prof: "chemist"});
// });

// app.delete("/user", (req,res) => {
//     // res.write({name: "ben stokes", prof: "great man"});
//     // res.send("this is the user delete call");
//     res.send({name: "ben stokes", prof: "crickter"});
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.use("/", (req,res) => {
//     res.send("this is for all routes includinf /user");
// });
// app.get("/user", (req,res) => {
//     res.send({name: "steven smith", prof: "cricketer"});
// });

// app.post("/user", (req,res) =>  {
//     res.send({name: "walter white", prof: "chemist"});
// });

// app.put("/user", (req,res) => {
//     res.send({name: "eliot alderson", prof: "vigilante hacker"});
// });

// app.patch("/user", (req,res) => {
//     res.send("this is the patch method to the user");
// });

// app.delete("/user", (req,res) => {
//     res.send("user data deleted successfully");
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

import express from "express";
const app = express();

app.get("/data", (req,res) => {
    res.send({name: "walter white", prof: "chemist"});
});

app.post("/data", (req,res) => {
    res.send({name: "steve smith", prof: "cricketer"});
});

app.patch("/data", (req,res) => {
    res.send({name: "benstokes", prof: "cricketer"});
});

app.put("/data", (req,res) => {
    res.send({name: "max verstappen", prof: "f1 driver"});
});

app.delete("/data", (req,res) =>  {
    res.send("data deleted successfully");
});

app.listen(4000, () => console.log("server is running on http://localhost:4000"));
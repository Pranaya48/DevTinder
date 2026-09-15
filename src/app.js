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

// import express from "express";
// const app = express();

// app.get("/data", (req,res) => {
//     res.send({name: "walter white", prof: "chemist"});
// });

// app.post("/data", (req,res) => {
//     res.send({name: "steve smith", prof: "cricketer"});
// });

// app.patch("/data", (req,res) => {
//     res.send({name: "benstokes", prof: "cricketer"});
// });

// app.put("/data", (req,res) => {
//     res.send({name: "max verstappen", prof: "f1 driver"});
// });

// app.delete("/data", (req,res) =>  {
//     res.send("data deleted successfully");
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from 'express'; 
// const app = express(); 

// app.get('/ab?c', (req, res) => { 
//     res.send('this is the route path of abc'); 
// }); 
// app.get(/^\/ab?c$/, (req,res) => {
//     res.send({name: "elliot alderson", prof: "hacker"});
// });

// app.get("/ab+c", (req,res) => {
//     res.send({name: "peter parker", prof: "photographer"});
// });

// app.get(/^\/ab+c$/, (req,res) => {
//     res.send({name: "peter parker", prof: "photographer"});
// });

// app.get("/ab*cd", (req,res) => {
//     res.send({name: "homelander", prof: "greatman"});
// });

// app.get("/ab*cd", (req,res) => {
//     res.send({name: "bruce wayne", prof: "batman"});
// });

// app.get("/a(bc)?d", (req,res) =>{
//     res.send("this  is the optional route");
// });
// app.get(/\/a(bc)?d$/, (req,res) =>{
//     res.send({name: "travis head", prof: "cricketer"});
// });

// app.get("/a(bc)d", (req,res) => {
//     res.send({name: "joker", prof: "villian"});
// });

// app.get(/^\/a(bc)+d$/, (req,res) =>  {
//     res.send({name: "joker", prof: "villian"});
// });

// app.get(/a/, (req,res) => {
//     res.send("this will works bcz of regx");
// });

// app.get(/.*fly$/, (req,res) => {
//     res.send("this is the regular expression and the route will work");
// });

// app.get(/.*der$/, (req,res) => {
//     res.send("homelander is a great man");
// });

// app.get("/user", (req,res) => {
//     console.log(req.query);
//     res.send({name: "skyler white", prof: "big women", hubby: req.query});
// });

// app.get("/user", (req,res) => {
//     console.log(req.query);
//     res.send({name: "peter parker", prof: "photographer", other: req.query});
// });

// app.get("/user/:name", (req,res) => {
//     console.log(req.params);
//     res.send({name: "spider man", man: "peter parker", id: req.params, data:req.query});
// })

// app.get("/user/:name/:frd/:gf", (req,res) => {
//     console.log(req.params);
//     res.send({name: req.params.name, frd: req.params["frd"], gf:req.params["gf"]});
// });
// app.get("/user/:name/:frd/:id", (req,res) => {
//     console.log(req.params);
//     res.send({name: "joker", prof: "villian"});
// });

// app.listen(4000, () => console.log('server is running on http://localhost:4000'));

// import express from "express";
// const app = express();

// app.get("/user/:frd/:prof", (req,res) => {
//     console.log(req.params);
//     console.log(req.query);
//     res.send({name: "peter parker", frd: req.params["frd"], prof:req["params"]["prof"], gf:req.query["gf"],city:req["query"]["city"]});
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res) => {
//     res.send("this is the homepage");
// });

// app.get("/user/:name/:prof", (req,res) => {
//     console.log(req.params["name"], req.params["prof"]);
//     res.send(`the user is ${req.params["name"]} and he is a ${req.params["prof"]}`);
// });

// app.get("/study", (req,res) => {
//     console.log(req.query);
//     res.send(`we are studying the ${req.query["sub"]} and the chapter is ${req.query["chap"]} and the page is ${req.query["page"]}`);
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

import express from "express";
const app = express();

app.get("/", (req,res) => {
    res.send("this  is the homepage");
});

app.get(/^\/ab+c/, (req,res) => {
    res.send({name: "steven smith", prof: "cricketer"});
});

app.listen(4000, () => console.log("server is running on http://localhost:4000"));
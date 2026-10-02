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

// import express from "express";
// const app = express();

// app.get("/", (req,res) => {
//     res.send("this  is the homepage");
// });

// app.get(/^\/ab+c/, (req,res) => {
//     res.send({name: "steven smith", prof: "cricketer"});
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res) =>{
//     console.log("this is the homepage handler\n");
//     res.send("this is the homepage route\n");
// });
// app.get("/user", (req,res,next) => {
//     console.log("this is the user handler1\n");
//     // res.send("this is the user route1");
//     next();
// },(req,res,next) => {
//     console.log("this is the user handler 2\n");
//     next();
// },(req,res,next) =>{
//     console.log("this is the user handler 3\n");
//     next();
// },(req,res,next) =>{
//     console.log("this is the user handler 4\n");
//     res.send("this is the final user route");
//     next();
// });

// app.get("/user", (req,res,next) => {
//     console.log("this is the user handler1\n");
//     next();
// },(req,res,next) => {
//     console.log("this is the user handler2\n");
//     next();
// },(req,res,next) => {
//     console.log("this is the user handler3\n");
//     next();
// },(req,res,next) => {
//     console.log("this is the user handler4\n");
//     res.send("this is the final user route\n");
//     next();
// });
// app.use("/demo", (req,res) => {

// });
// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res) => {
//     res.send("this is the homepage");
// });

// app.get("/user", (req,res,next) => {
//     console.log("this is the handler1\n");
//     // res.send("response1");
//     next();
// },(req,res,next) => {
//     console.log("this is the handler2\n");
//     next();
//     // res.send("response2");
// },(req,res,next) =>{
//     console.log("this is the handler3\n");
//     // res.send("response3");
//     // next();
// });

// app.get("/user", (req,res,next) => {
//     console.log("handler1\n");
//     next();
// },(req,res,next) => {
//     console.log("handler2\n");
//     // next();
//     res.send("response2\n");
// },(req,res,next) => {
//     console.log("handler3\n");
//     // res.send("response3");
//     next();
// });

// app.get("/user", (req,res,next) => {
//     console.log("handler1\n");
//     next();
//     // res.send("response1\n");
// },(req,res,next) => {
//     console.log("handler2\n");
//     // res.send("response2\n");
// },(req,res,next) => {
//     console.log("handler3\n");
//     res.send("Response3");
//     next();
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// const express = require("express");
// import express from "express";
// const app = express();

// app.get("/", (req,res) => {
//     res.send("this is the homepage");
// });

// app.get("/user", (req,res,next) => {
//     console.log("handler1\n");
//     next();
// },(req,res,next) => {
//     console.log("handler2\n");
//     next();
// },(req,res,next) => {
//     console.log("handler3\n");
//     res.send("response3\n");
//     next();
// });

// app.get("/user", (req,res,next) => {
//     console.log("handler1\n");
//     next();
// },(req,res,next) => {
//     console.log("handler2\n");
//     next();
// },(req,res,next) => {
//     console.log("handler3\n");
//     res.send("response3");
//     next();
// });

// app.get("/user", (req,res,next) => {
//     console.log("handler1\n");
//     next();
// },(req,res,next) => {
//     console.log("handler2\n");
//     res.send("Response2");
// },(req,res,next) => {
//     console.log("handler3");
//     res.send("response3");
// },(req,res,next) => {
//     console.log("handler4");
//     res.send("response4");
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res) => {
//     res.send("this is the homepage");
// });

// app.get("/user", 
//     [(req,res,next) => {
//         console.log("handler1\n");
//         next();
//     },
//     (req,res,next) =>{
//         console.log("handler2\n");
//         next();
//     },
//     (req,res,next) => {
//         console.log("handler3\n");
//         next();
//     }],
//     (req,res,next) =>{
//         console.log("handler\n");
//         next();
//     },
//     (req,res,next) => {
//         console.log("handler5\n");
//         res.send("final destination\n");
//     }
// );

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res,next) => {
//     res.send("this is the homepage");
// });

// let hand1 = (req,res,next) => {
//     console.log("this is the handler1\n");
//     next();
// };

// let hand2 = (req,res,next) => {
//     console.log("this is the handler2\n");
//     next();
// };

// let hand3 = (req,res,next) => {
//     console.log("this is the handler3\n");
//     next();
// };

// let hand4 = (req,res,next) => {
//     console.log("this is the handler\n");
//     next();
// };

// let hand5 = (req,res,next) => {
//     console.log("this is the handler5\n");
//     res.send("this is the final destination\n");
//     next();
// };

// // app.get("/demo", hand1,hand2,hand3,hand4,hand5);

// // app.get("/demo", [hand1,hand2,hand4],hand3,hand5);

// app.get("/demo", [hand1,hand2,hand3,hand4,hand5]);

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res) => {
//     res.send("this is the homepage");
// });

// app.get("/user", (req,res,next) => {
//     console.log("user handler1\n");
//     next();
// });

// app.get("/user", (req,res,next) => {
//     console.log("this handler2\n");
//     next();
// });

// app.get("/user", (req,res,next) => {
//     console.log("this hhandler3\n");
//     next();
// });

// app.get("/user", (req,res,next) => {
//     console.log("this handler4\n");
//     res.send("this is the final destination\n");
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res,next) => {
//     res.send("this is the homepage");
// });

// app.get("/demo", (req,res,next) => {
//     console.log("this is the handler1\n");
//     next();
// });
// app.get("/demo", (req,res,next) => {
//     console.log("this is the handler2\n");
//     res.send("this is the final destination\n");
//     next();
// });
// app.get("/user", (req,res,next) => {
//     console.log("this is the handler3\n");
//     next();
// })

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res,next) => {
//     res.send("this is the homepage");
// });

// app.get("/demo", (req,res,next) =>{
//     console.log("this is the demo handler2\n");
//     res.send("this is the final destination");
//     next();
// });
// app.get("/demo", (req,res,next) => {
//     console.log("this is the demo handler1\n");
//     next();
// });

// app.get("/demo", (req,res,next) => {
//     console.log("this is the handler1\n");
//     next();
// });
// app.get("/demo", (req,res,next) => {
//     console.log("this is the handler2\n");
//     res.send("this is the final destination1\n");
//     next();
// });
// app.get("/demo", (req,res,next) => {
//     console.log("this is the handler2\n");
//     res.send("this is the final  destination2\n");
// });

// app.get("/demo", (req,res,next) => {
//     console.log("this is the handler1\n");
//     res.send("this is the first destination");
//     // next();
// });
// app.get("/demo", (req,res,next) => {
//     console.log("this is the handler2\n");
//     res.send("this is the final destination");
// });

// app.get("/demo", (req,res,next) => {
//     console.log("handler1\n");
//     next();
// });
// app.get("/demo", (req,res,next) => {
//     console.log("handler2\n");
// });

// app.get("/demo", (req,res,next) => {
//     res.send("this is the end");
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.use("/", (req,res,next) => {
//     console.log("this is the / route handler\n");
//     next();
// });

// app.get("/user", (req,res,next) => {
//     console.log("user handler1\n");
//     next();
// },(req,res,next) =>{
//     console.log("user handler2\n");
//     next();
// },(req,res,next) => {
//     console.log("user handler3\n");
//     res.send("the 1st destination");
// },(req,res,next) => {
//     console.log("user handler4\n");
//     res.send("Final destination");
// });

// app.listen(4000,() => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.use("/", (req,res,next) => {
//     console.log("this is the middleware\n");
//     // next();
// });

// app.get("/user", (req,res,next) => {
//     console.log("this is the handler1\n");
//     next();
// },(req,res,next) => {
//     console.log("this is the handler2\n");
//     res.send("response");
// });

// app.listen(4000,() => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.use("/admin", (req,res,next) => {
//     let token = "adminabc" //it should comes from req?.body.token 
//     let isAdmin = token === "adminabc";
//     if(!isAdmin) {
//         res.send(401).send("You are not an admin");
//     }else {
//         next();
//     };
// });

// app.get("/admin/getAllData", (req,res,next) => {
//     res.send("all data fetched by the Admin");
// });

// app.post("/admin/addData", (req,res,next) => {
//     res.send("added data by the admin");
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res,next) => {
//     res.send("this is the homepage");
// });

// app.use("/admin", (req,res,next) => {
//     let token = "adminabc";
//     let valid = token === "adminabc";
//     if(!valid) {
//         res.status(401).send("Admin is not Authorized!!\n");
//     };
//     next();
//     console.log("admin middleware is running\n");
// });

// app.use("/user", (req,res,next) => {
//     let token = "userabc";
//     let valid = token === "userabcd";
//     if(!valid) {
//         res.status(401).send("user is not authenticated\n");
//     };
//     next();
//     console.log("user middleware is running\n");
// });

// app.get("/", (req,res,next) => {
//     res.send("this  is the homepage\n");
// });

// app.get("/admin/data", (req,res,next) => {
//     res.send("fetching data by the admin\n");
// });

// app.post("/admin/add", (req,res,next) =>{
//     res.send("adding new data by the admin\n");
// });

// app.put("/admin/update", (req,res,next) => {
//     res.send("updating data by the admin\n");
// });

// app.delete("/admin/delete", (req,res,next) => {
//     res.send("deleting data by the admin\n");
// });

// app.get("/user/data", (req,res,next) => {
//     res.send("fetching data by the user\n");
// });

// app.post("/user/add", (req,res,next) => {
//     res.send("adding data by the user\n");
// });

// app.put("/user/update", (req,res,next) => {
//     res.send("updating data by the user\n");
// });

// app.delete("/user/delete", (req,res,next) => {
//     res.send("deleting data by the user\n");
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();
// import {user, admin} from "../middleware/auth.js";

// app.get("/", (req,res,next) => {
//     res.send("this is the homepage\n");
// });

// app.get("/user/data", user, (req,res,next) => {
//     res.send("fetching data by the user\n");
// });

// app.post("/user/add", user, (req,res,next) => {
//     res.send("adding data by the user\n");
// });

// app.put("/user/update", user, (req,res,next) => {
//     res.send("updating data by the user\n");
// });

// app.patch("/user/patch", user, (req,res,next) => {
//     res.send("patching data by the user");
// });

// app.delete("/user/delete", user, (req,res,next) =>{
//     res.send("deleting data by the user");
// });

// app.get("/admin/data", admin, (req,res,next) => {
//     res.send("fetching data by the admin");
// });

// app.post("/admin/add", admin, (req,res,next) => {
//     res.send("adding data by the admin\n");
// });

// app.put("/admin/update", admin, (req,res,next) => {
//     res.send("updating data by the admin");
// });

// app.patch("/admin/patch", admin, (req,res,next) => {
//     res.send("patching data by the admin");
// });

// app.delete("/admin/delete", admin, (req,res,next) => {
//     res.send("deleting data by the admin");
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res) => {
//     res.send("this is the homepage");
// });

// // app.get("/user/data", (req,res,next) => {
// //     throw new Error("Random Demo error!!");
// //     res.status(500).send("error contact support team");
// // });
// // app.use("/", (err, req, res, next) => {
// //     if(err) {
// //         res.status(500).send("something went wrong!!1");
// //     };
// // });
// // app.get("/user/data", (req,res,next) =>{
// //     try{
// //         throw new Error("something went wrong!!");
// //     }catch(err) {
// //         res.status(500).send("error occured contact the support team!");
// //     };
// // });

// app.get("/user/data", (req,res,next) => {
//     throw new Error("error!! contact the support team!");
//     res.status(500).send("contact the  support team!");
// });
// app.use("/", (err, req, res, next) => {
//     if(err) {
//         res.status(500).send("something went wrong!2");
//     };
// });
// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res,next) => {
//     res.send("this is the homepage\n");
// });

// app.post("/order", (req,res,next) => {
//     try{
//         throw new Error("this order can not be placed\n");
//     }catch(err) {
//         res.status(500).send(err.message);
//     }
// });

// app.put("/logs", (req,res,next) => {
//     try{
//         throw new Error("this logs can not be updated\n");
//     }catch(err) {
//         next(err);
//     }
// });

// app.patch("/profile", (req,res,next) => {
//     try{
//         throw new Error("this profile can not be replaced\n");
//     }catch(err) {
//         next(err);
//     }
// });

// app.delete("/posts", (req,res,next) => {
//     try{
//         throw new Error("these post can not be deleted\n");
//     }catch(err) {
//         res.status(500).send(err.message);
//     }
// });

// app.use("/", (err,req,res,next) => {
//     console.log(err.message);
//     res.status(500).send(err.message);
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();

// app.get("/", (req,res,next) => {
//     res.send("this is the homepage\n");
// });

// app.use("/", (err,req,res,next) => {
//     console.error(err.message);
//     res.status(500).send(err.message);
// });

// app.get("/user", (req,res,next) => {
//     try{
//         throw new Error("something went wrong");
//     }catch(err) {
//         next(err);
//     }
// });

// app.use("/", (err,req,res,next) => {
//     console.error(err.message);
//     res.status(500).send(err.message);
// });

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();
// import connectDB from "./config/db.js";

// app.get("/", (req,res) => {
//     res.send("this is the homepage!!");
// });

// connectDB();

// app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();
// import connectDB from "./config/db.js";

// app.get("/", (req,res) => {
//     res.send("this is the homepage!!");
// });

// connectDB().then(() => {
//     console.log("connection successfully established!!");
//     app.listen(4000, () => console.log("server is running on http://localhost:4000"));
// }).catch(err => console.log("failed to connect!! ",err.message));

// // app.listen(4000, () => console.log("server is running on http://localhost:4000"));

// import express from "express";
// const app = express();
// import { connectDB } from "./config/db.js";
// import User from "./model/user.js";
// // app.use(express.json());
// app.get("/", (req,res,next) => {
//     res.send("this is the homepage");
// });
// // app.post("/signup", async(req,res) => {
// //     const user = new User({
// //         firstName: "home",
// //         lastName: "lander",
// //         emailId: "home@lander.com",
// //         password: "home@land",
// //         age: 44,
// //         gender: "male"
// //     });
// //     try{
// //         await user.save();
// //         console.log(user);
// //         console.log("new document created!!");
// //         res.status(201).json({user});
// //     }catch(err) {
// //         console.error("failed to save the data",err.message);
// //         res.status(500).json({msg: "failed to save the data", msg1: err.message});
// //     };
// // });
// // app.post("/user", async(req,res,next) => {
// //     const man = new User(req.body);
// //     try{
// //         await man.save();
// //         console.log("successfully saved to the database!!");
// //         console.log(man);
// //     }catch(err) {
// //         console.error(err.message);
// //     }
// // });

// app.post("/user", async(req,res,next) => {
//     const man = new User(req.body);
//     try{
//         await man.save();
//         console.log("data saved successfully");
//         res.status(201).json(man);
//     }catch(err) {
//         console.error("failed to save the data to the database!!");
//         res.status(500).json({msg: err.message});
//     }
// });
// connectDB().then(() => {
//     console.log("sucessfully connected to the database!!");
//     app.listen(4000, () => console.log("server is running on http://localhost:4000"));
// }).catch(err => console.log("failed to connect to the database!! ",err.message));

import express from "express";
const app = express();
import { connectDB } from "./config/db.js";
import User from "./model/user.js";

app.use(express.json());
app.get("/", (req,res,next) => {
    res.send("this  is the homepage");
});

app.post("/user", async(req,res,next) => {
    let data = new User(req.body);
    try{
        await data.save();
        console.log(data);
        res.status(201).json(data);
    }catch(err) {
        console.log("failed to send  the data ",err.message);
        res.status(500).json({msg: err.message});
    }
});

connectDB().then(() => {
    console.log("successfully connected to the database!!");
    app.listen(4000, () => console.log("server is running on http://localhost:4000"));
}).catch(err => console.error("can not connect to the database!! ",err.message));
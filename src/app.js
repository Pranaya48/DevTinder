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

// import express from "express";
// const app = express();
// import { connectDB } from "./config/db.js";
// import User from "./model/user.js";
// import mongoose from "mongoose";

// app.use(express.json());
// app.get("/", (req,res,next) => {
//     res.send("this  is the homepage");
// });

// app.post("/user", async(req,res,next) => {
//     let data = new User(req.body);
//     try{
//         await data.save();
//         console.log(data);
//         res.status(201).json(data);
//     }catch(err) {
//         console.log("failed to send  the data ",err.message);
//         res.status(500).json({msg: err.message});
//     }
// });

// app.get("/users", async(req,res,next) => {
//     try{
//         const mans = await User.find({});
//         console.log(mans);
//         res.status(200).json(mans);
//     }catch(err) {
//         console.log("can not fetch the database!!", err.message);
//         res.status(500).send("can not fetch the database!!")
//     }
// });

// app.delete("/drop", async(req,res,next) =>{
//     try{
//         if(mongoose.connection.readyState !== 1) {
//             console.log("database is not connected!!");
//             res.status(500).send("database is not connected!!");
//         };

//         await mongoose.connection.dropDatabase();
//         console.log("database droped successfully!!");
//         res.status(200).json({success: true, msg: "database drop successfully!!"});
//     }catch(err) {
//         console.log("failed to drop the database!!");
//         res.status(500).json({success: false, msg: err.message});
//     }
// });

// connectDB().then(() => {
//     console.log("successfully connected to the database!!");
//     app.listen(4000, () => console.log("server is running on http://localhost:4000"));
// }).catch(err => console.error("can not connect to the database!! ",err.message));

// import express from "express";
// const app = express();
// import mongoose from "mongoose";
// import {connectDB} from "./config/db.js";
// import User from "./model/user.js";

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get("/", (req,res) => {
//     return res.send("this is the homepage!!");
// });

// app.post("/user", async(req,res) => {
//     const data = new User(req.body);
//     if(!data || Object.keys(data).length === 0) {
//         console.log("no data provided!!");
//         return res.status(400).send("no data provided!!");
//     };
//     try{
//         const man = await data.save();
//         console.log("successfully created a user!!");
//         console.log(man);
//         return res.status(201).json(man);
//     }catch(err) {
//         console.error("failed to create a user!!",err.message);
//         return res.status(500).send("failed to create a user!!");
//     }
// });

// app.get("/user/:email", async(req,res) => {
//     const email = req.params.email;
//     if(!email) {
//         console.log("email is required!!");
//         res.status(400).send("email is not provided!!");
//     };
//     try{
//         const man = await User.findOne({emailId:email});
//         if(!man) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         };
//         console.log(man);
//         return res.status(200).json(man);
//     }catch(err) {
//         console.error("failed to fetch user data!!",err.message);
//         return res.status(500).send("failed to fetch user data!!");
//     }
// });

// app.patch("/user/:email", async(req,res) => {
//     const email = req.params.email;
//     const data = req.body;
//     if(!data || Object.keys(data).length === 0) {
//         console.log("no data is provided!!");
//         return res.status(400).send("no data provided!!");
//     }
//     if(!email) {
//         console.log("no email provided!!");
//         return res.status(400).send("no email is provided!!");
//     };
//     try{
//         const man = await User.findOneAndUpdate({emailId: email}, {$set: data}, {returnDocument: "after", runValidators: true});
//         if(!man) {
//             console.log("user not found!!");
//             return res.status(404).send("user not found!!");
//         };
//         console.log("data updated successfully!!");
//         console.log(man);
//         return res.status(200).json(man);
//     }catch(err) {
//         console.error("failed to update user data!!",err.message);
//         return res.status(500).send("failed to update user data!!");
//     }
// });

// app.put("/user/:email", async(req,res) => {
//     const email = req.params.email;
//     const data = req.body;
//     if(!email) {
//         console.log("email is not provided!!");
//         return res.status(400).send("email is not provided!!");
//     };
//     if(!data || Object.keys(data).length === 0) {
//         console.log("data is not provided or can not set empty!!");
//         return res.status(400).send("data is not provided or can not set empty!!\n");
//     };
//     try{
//         const man = await User.findOneAndUpdate({emailId: email}, data, {returnDocument: "after", runValidators: true});
//         if(!man) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         };
//         console.log("data replaced successfully!!");
//         console.log(man);
//         return res.status(200).json(man);
//     }catch(err) {
//         console.error("failed to repalce the data!! ",err.message);
//         return res.status(500).send("failed to replace the data!!");
//     }
// });

// app.delete("/user/:email", async(req,res) => {
//     const email = req.params.email;
//     if(!email) {
//         console.log("email is required!!");
//         return res.status(400).send("email is required!!");
//     };
//     try{
//         await User.findOneAndDelete({emailId: email});
//         console.log("user deleted successfully!!");
//         return res.status(200).send("user delete successfully!!");
//     }catch(err) {
//         console.error("failed to delete the user!!",err.message);
//         return res.status(500).send("failed to delete the user!!");
//     }
// });

// app.get("/db", async(req,res) => {
//     try{
//         const db = mongoose.connection.name;
//         const collections = await mongoose.connection.db.listCollections().toArray();
//         console.log(db, collections);
//         return res.status(200).json({db: db, collections: collections});
//     }catch(err) {
//         console.error("failed to fetch dbs and collections!!",err.message);
//         res.status(500).send("failed to fetch dbs and collections!!");
//     }
// });

// connectDB().then(() => {
//     console.log("successfully connected to the database!!");
//     app.listen(4000, () => console.log("server is running on http://localhost:4000"));
// }).catch(err => console.error("failed to establish the connection with the database!!",err.message));


// import express from "express";
// const app = express();
// import { connectDB } from "./config/db.js";
// import User from "./model/user.js";

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get("/", (req,res) => {
//     res.send("this is the homepage!!");
// });

// app.post("/signup", async(req,res) => {
//     const data = new User(req.body);
//     try{
//         await data.save();
//         console.log("user created successfully!!");
//         console.log(data);
//         res.status(201).json(data);
//     }catch(err) {
//         console.error("failed to create the user!! ",err.message);
//         res.status(500).send("failed to create the user!!");
//     }
// });

// // app.get("/user", async(req,res) => {
// //     try{
// //         const data = await User.find({});
// //         console.log("data successfully fetched!!");
// //         console.log(data);
// //         return res.status(200).json(data);
// //     }catch(err) {
// //         console.error("failed to fetch data from the database!! ",err.message);
// //         return res.status(500).json({msg: err.message, msg1: "failed to fetch data from the user!!"});
// //     }
// // });

// // app.get("/user", async(req,res) => {
// //     const man = req.body.id;
// //     if(!man) {
// //         console.log("require data is not provided!!");
// //         return res.status(400).send("required data is not provided!!");
// //     };
// //     try{
// //         // const data = await User.findById(man);
// //         const data = await User.findOne({_id: man});
// //         if(!data) {
// //             console.log("user not exists!!");
// //             return res.status(404).send("user not found!!");
// //         };
// //         console.log(data);
// //         return res.status(200).json(data);
// //     }catch(err) {
// //         console.error("failed to fetch the user data from the database!!",err.message);
// //         res.status(500).send("failed to fetch user data from the database!!");
// //     }
// // });

// app.put("/user", async(req,res) => {
//     const userId = req.body.id;
//     const data = req.body;
//     if(!userId) {
//         console.log("email is not provided!!");
//         return res.status(400).send("email is not provided!!");
//     };
//     if(!data && Object.keys(data).length === 0) {
//         console.log("no data has been provided!!");
//         return res.status(400).send("no data has been provided!!");
//     };
//     try{
//         // const man = await User.findByIdAndReplace(userId, data, {returnDocument: "after", runValidators: true});
//         const man = await User.findByIdAndUpdate(userId, data, {returnDocument: "after", runValidators: true});
//         if(!man) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         };
//         console.log("user replaced successfully!!");
//         console.log(man);
//         return res.status(200).json(man);
//     }catch(err) {
//         console.error("failed to replace the data!! ",err.message);
//         return res.status(500).send("failed to replace the user data!!");
//     }
// });

// app.get("/user", async(req,res) => {
//     const email = req.body.email;
//     if(!email){
//         console.log("required data is not provided!!");
//         return res.status(400).send("required data is not provided!!");
//     };
//     try{
//         // const man = await User.findOne({emailId: email});
//         const man = await User.findOne();
//         if(!man) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         };
//         console.log(man);
//         return res.status(200).json(man);
//     }catch(err) {
//         console.log("failed to fetch the user!! ",err.message);
//         return res.status(500).send("failed to fetch the user!!");
//     }
// });

// app.get("/find", async(req,res) => {
//     const userId = req.body.id;
//     if(!userId){
//         console.log("required data is not provided!!");
//         return res.status(400).send("required data is not provided!!");
//     };
//     try{
//         const man = await User.findById(userId);
//         if(!man) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         };
//         console.log(man);
//         return res.status(200).json(man);
//     }catch(err) {
//         console.error("failed to fetch user data!! ",err.message);
//         return res.status(500).send("failed to fetch user data!!");
//     }
// });

// app.patch("/user", async(req,res) => {
//     const userId = req.body.id;
//     const data = req.body;
//     if(!userId) {
//         console.log("required data is not provided!!");
//         return res.status(400).send("required data is not provided!!");
//     };
//     if(!data) {
//         console.log("no data has been provided!!");
//         return res.status(400).send("no data has been provided!!");
//     };
//     try{
//         const man = await User.findByIdAndUpdate({_id: userId}, data, {returnDocument: "after", runValidators: true});
//         // const man = await User.findByIdAndUpdate(userId, data, {returnDocument: "after", runValidators: true});
//         if(!man) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         }
//         console.log(man);
//         return res.status(200).json(man);
//     }catch(err) {
//         console.log("failed to update the data", err.message);
//         return res.status(500).send("failed tp udpate the data!!");
//     }
// });

// app.delete("/user", async(req,res,next) => {
//     const userId = req.body.id;
//     if(!userId) {
//         console.log("user Id is not provided!!");
//         return res.status(400).send("user id is not provided!!");
//     };
//     try{
//         const user = await User.findByIdAndDelete(userId);
//         if(!user) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         }
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
// }).catch(err => console.error("failed to connnect to the database!!",err.message));

// import express from "express";
// const app = express();
// import mongoose from "mongoose";
// import { connectDB } from "./config/db.js";
// import User from "./model/user.js";

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     return res.send("this is the homepage!!");
// });

// app.get("/user", async (req, res) => {
//     const id = req.body.id;
//     if (!id) {
//         console.log("no user id given!!");
//         return res.status(400).send("no user id given!!");
//     };
//     try {
//         const user = await User.findById(id);
//         if (!user) {
//             console.log("no user found!!");
//             return res.status(404).send("no user found!!");
//         };
//         console.log(user);
//         return res.status(200).json(user);
//     } catch (err) {
//         console.log("failed to fetch the user!! ", err.message);
//         return res.status(500).send("failed to fetch the  user " + err.message);
//     }
// });

// app.get("/all", async (req, res) => {
//     try {
//         const data = await User.find();
//         if (!data) {
//             console.log("no data found!!");
//             return res.status(404).send("no data found!!");
//         }
//         console.log(data);
//         return res.status(200).json(data);
//     } catch (err) {
//         console.log("failed to fetch data!!" + err.message);
//         return res.status(500).send("failed to fetch the user data!! " + err.message);
//     }
// });

// app.post("/user", async (req, res) => {
//     const data = req.body;
//     if (data.length === 0 && Object.keys(data).length === 0) {
//         console.log("no data provided!!");
//         return res.status(400).send("no data provided!!");
//     };
//     try {
//         const man = await User(data).save();
//         console.log(man);
//         return res.status(201).json(man);
//     } catch (err) {
//         console.error("failed to save the data!! " + err.message);
//         return res.status(500).send("failed to save the user data!! " + err.message);
//     }
// });

// // app.patch("/user", async(req,res) => {
// //     const {id, ...data} = req.body;
// //     if(!id) {
// //         console.log("no user id provided!!");
// //         return res.status(400).send("no user id provided!!");
// //     };
// //     if(!data.length ===0  && Object.keys(data).lenght === 0){
// //         console.error("no data provided!!");
// //         return res.status(400).send("no user data provided!!");
// //     };
// //     try{
// //         const man = await User.findByIdAndUpdate(id, {$set: data}, {runValidators: true, returnDocument: "after"});
// //         if(!man) {
// //             console.error("no user found!!");
// //             return res.status(404).send("no user found!!");
// //         };
// //         console.log(man);
// //         return res.status(200).json(man);
// //     }catch(err) {
// //         console.log("failed to update the user data!! "+ err.message);
// //         return res.status(500).send("failed to update the user data!! "+ err.message);
// //     }
// // });

// // app.patch("/user", async (req, res) => {
// //     const { id, ...data } = req.body;
// //     if (!id) {
// //         console.log("user id is not provided!!");
// //         return res.status(400).send("user id is not provided!!");
// //     };
// //     if (Object.keys(data).length === 0) {
// //         console.log("no data provided!!");
// //         return res.status(400).send("no data provided!!");
// //     };
// //     if (!mongoose.isObjectIdOrHexString(id)) {
// //         console.log("invalid userId!!");
// //         return res.status(400).send("invalid user id!!");
// //     };
// //     try {
// //         const validValue = ["age", "password", "about", "profilePic", "gender", "skills"];
// //         // const validation = Object.values(validValue).every((valData) => validValue.includes(valData));
// //         // const validation = Object.values(validValue).every((valData) => validValue.includes(valData));
// //         // const validation = Object.values(validValue).every((field) => validValue.includes(field));
// //         // Check if EVERY incoming key from req.body is permitted
// //         // const validation = Object.keys(data).every((field) => validValue.includes(field));
// //         const validation = Object.keys(data).every((field) => validValue.includes(filed));
// //         if (!validation) {
// //             console.log("invalid field to update!!");
// //             throw new Error("invalid field to update!!");
// //         };
// //         if (Array.isArray(data.skills) && data?.skills.length > 10) {
// //             throw new Error("skills can not be more than 10!!");
// //         };
// //         const man = await User.findByIdAndUpdate(id, { $set: data }, { runValidators: true, returnDocument: "after", new: true });
// //         if (!man) {
// //             console.log("no user found!!");
// //             return res.status(404).send("no user found!!");
// //         };
// //         console.log(man);
// //         return res.status(200).json(man);
// //     } catch (err) {
// //         console.log("failed to update the user!! ", err.message);
// //         if (err.name === "ValidationError") {
// //             return res.status(400).json({
// //                 msg: "validation failed!!",
// //                 err: Object.values(err).map((err) => err.message)
// //             });
// //         };
// //         if (err.name === "CasteError") {
// //             return res.status(400).send("validation failed!!");
// //         };
// //         return res.status(500).send("failed to update the user!! " + err.message);
// //     }
// // });

// // app.patch("/user", async(req,res) => {
// //     const {id, ...data} = req.body;
// //     if(!id) {
// //         console.log("no user id provided!!");
// //         return res.status(400).send("no userId provided!!");
// //     };
// //     if(Object.values(data).length === 0) {
// //         console.log("no data provided!!");
// //     };
// //     if(!mongoose.isObjectIdOrHexString(id)) {
// //         console.log("user id is not valid!!");
// //         return res.status(400).send("userId is not valid!!");
// //     };
// //     try{
// //         const validValue = ["age", "gender", "profilePic", "skills", "about", "password"];
// //         const validData = Object.keys(validValue).every((filed) => validValue.includes(filed));
// //         if(!validData) {
// //             console.log("field data update is not valid!!");
// //             res.status(400).send("field data update is not valid!!");
// //         };
// //         if(Array.isArray(data?.skills) && data?.skills.length > 10) {
// //             console.log("skills must be Array or Must be less than 10!!");
// //             return res.status(400).send("skills must be a Array and less than 10!!");
// //         };
// //         const man = await User.findByIdAndUpdate(id, {$set: data}, {runValidators: true, returnDocument: true});
// //         if(!man) {
// //             console.log("man not found!!");
// //             return res.status(404).send("user not found!!");
// //         };
// //         console.log("user updated successfully!!");
// //         return res.status(200).json(man);
// //     }catch(err) {
// //         console.log("failed to update the user!! ",err.message);
// //         if(err.name === "CastingError") {
// //             console.log("invalid data!!");
// //             return res.status(400).send("invalid data!!");
// //         };
// //         if(err.name === "ValidationError") {
// //             console.log("validation failed!!");
// //             return res.status(400).json({
// //                 msg: "validation failed!!",
// //                 error: Object.values(err).map((msg) => msg.message)
// //             })
// //         };
// //         return res.status(500).send("failed to update the user!! "+err.message);
// //     }
// // });

// // app.patch("/user", async(req,res) => {
// //     const {id, ...data} = req.body;
// //     if(!id) {
// //         console.log("no userId provided!!");
// //         return res.status(400).send("no userId provided!!");
// //     };
// //     if(Object.keys(data) === 0) {
// //         console.log("no data provided!!");
// //         return res.status(400).send("no user data provided!!");
// //     };
// //     if(!mongoose.isObjectIdOrHexString(id)) {
// //         console.log("userId is not valid!!");
// //         return res.status(400).send("userId is not valid!!");
// //     };
// //     try{
// //         const validData = ["skills", "password", "about", "profilePic", "age", "id"];
// //         const validation = Object.keys(validData).every((field) => validData.includes(field));
// //         if(!validation){
// //             console.log("can not update field!!");
// //             throw new Error("can not update field!!");
// //         };
// //         if(Array.isArray(data?.skills) && data?.skills.length > 10) {
// //             console.log("skills must be less than 10 and must be an array!!");
// //             throw new Error("skills must be an Array and length must be less than 10!");
// //         };
// //         const man = await User.findByIdAndUpdate(id, {$set: data}, {runValidators: true, returnDocument: "after"});
// //         if(!man) {
// //             console.log("user not found!!");
// //             return res.status(404).send("user not found!!");
// //         };
// //         console.log(man);
// //         return res.status(200).json(man);
// //     }catch(err) {
// //         console.log("failed to update user data!! ",err.message);
// //         if(err.name === "CastingError") {
// //             console.log("invalid data!!");
// //             return res.status(400).send("invalid data");
// //         };
// //         if(err.name === "ValidationError") {
// //             console.log("validation failed!!");
// //             return res.status(400).json({
// //                 msg: "validation failed!!",
// //                 error: Object.values(err).every((msg) => msg.message),
// //             })
// //         };
// //         return res.status(500).send("failed to update user data!!");
// //     };
// // });

// app.patch("/user", async (req, res) => {
//     const { id, ...data } = req.body;
//     if (!id) {
//         console.log("no userId provided!!");
//         return res.status(400).send("no UserId provided!!");
//     };
//     if (Object.keys(data).length === 0) {
//         console.log("no data provided!!");
//         return res.status(400).send("no user data provided!!");
//     };
//     if (!mongoose.isObjectIdOrHexString(id)) {
//         console.log("Invalid UserId");
//         return res.status(400).send("Invalid UserId!!");
//     };
//     try {
//         // const allowed = ["skills", "age", "id", "about", "profilePic", "gender", "password"];
//         // const validation = Object.keys(data).map((field) => allowed.includes(field));
//         // if(!validation){
//         //     console.log("field can not be updated!!");
//         //     // return res.status(400).send("field can not be updated!!");
//         //     throw new Error("field can not be updated!!");
//         // };
//         const allowed = ["skills", "age", "about", "profilePic", "gender", "password"];
//         const isValid = Object.keys(data).every((field) => allowed.includes(field));
//         if (!isValid) {
//             return res.status(400).send("field can not be updated!!");
//         }
//         if (Array.isArray(data?.skills) && data?.skills.length > 10) {
//             console.log("skills must be an array and not more than 10!!");
//             throw new Error("skills must be an array and not more than 10!!");
//         };
//         const man = await User.findByIdAndUpdate(id, { $set: data }, { runValidators: true, returnDocument: true });
//         if (!man) {
//             console.log("user not found!!");
//             return res.status(404).send("user not found!!");
//         };
//         console.log(man);
//         return res.status(200).json(man);
//     } catch (err) {
//         console.log("failed to update the user data!! ", err.message);
//         if (err.name === "CasteError") {
//             console.log("Invalid data!!");
//             return res.status(400).send("invalid data!!");
//         };
//         if (err.name === "ValidationError") {
//             console.log("failed to validation!!");
//             return res.status(400).json({
//                 msg: "Validation error",
//                 errror: Object.values(err.errors).map((msg) => msg.message),
//             });
//         };
//         return res.status(500).send("failed to update user data!! " + err.message);
//     }
// });

// app.delete("/user", async (req, res) => {
//     const id = req.body.id;
//     if (!id) {
//         console.log("no user id provided!!");
//         return res.status(400).send("no user id provided!!");
//     };
//     try {
//         await User.findByIdAndDelete(id);
//         console.log("user deleted successfully!!");
//         return res.status(200).send("user deleted successfully!!");
//     } catch (err) {
//         console.log("user deleted successfully!! ", err.message);
//         return res.status(500).send("failed to delete the user!! " + err.message);
//     }
// });

// connectDB().then(() => {
//     console.log("successfully connected to the database!!");
//     app.listen(4000, () => console.log("server is running on http://localhost:4000"));
// }).catch(err => console.error("failed to connect  to the database!!"));

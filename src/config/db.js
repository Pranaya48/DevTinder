
// import mongoose from "mongoose";

// const url = "mongodb://peter:Ranjan%4016062004@ac-gtxzxog-shard-00-00.qoghote.mongodb.net:27017,ac-gtxzxog-shard-00-01.qoghote.mongodb.net:27017,ac-gtxzxog-shard-00-02.qoghote.mongodb.net:27017/?ssl=true&replicaSet=atlas-kbz34u-shard-0&authSource=admin&appName=lovify";
// const connectDB = async () => {
//     // await mongoose.connect("mongodb+srv://peter:Ranajan%4016062004@lovify.qoghote.mongodb.net/?appName=lovify");
//     await mongoose.connect(url);
// };

// connectDB().then(() => console.log("connection established successfully!!")).catch(err => console.error("can not connect to the database!! ",err.message));

// export default connectDB;

// import mongoose from "mongoose";

// const url = "mongodb://peter:Ranjan%4016062004@ac-gtxzxog-shard-00-00.qoghote.mongodb.net:27017,ac-gtxzxog-shard-00-01.qoghote.mongodb.net:27017,ac-gtxzxog-shard-00-02.qoghote.mongodb.net:27017/?ssl=true&replicaSet=atlas-kbz34u-shard-0&authSource=admin&appName=lovify";

// const connectDB = async() => {
//     try{
//         await mongoose.connect(url);
//         console.log("database connection established !!");
//     }catch(err) {
//         console.error("Database connection can not be established!! ", err.message);
//     }
// };

// // connectDB();
// export default connectDB;

// import mongoose from "mongoose";
// const url = "mongodb://peter:Ranjan%4016062004@ac-gtxzxog-shard-00-00.qoghote.mongodb.net:27017,ac-gtxzxog-shard-00-01.qoghote.mongodb.net:27017,ac-gtxzxog-shard-00-02.qoghote.mongodb.net:27017/?ssl=true&replicaSet=atlas-kbz34u-shard-0&authSource=admin&appName=lovify";

// const connectDB = async () => {
//     await mongoose.connect(url);
// };

// // connectDB().then(() => console.log("connection established successfully!!")).catch(err => console.error("connection is failed!! ",err.message));
// export default connectDB;

import mongoose from "mongoose";

const connectDB = async() => {
    // await mongoose.connect("mongodb+srv://peter:Ranjan%4016062004@lovify.qoghote.mongodb.net/lovify?appName=lovify");
    await mongoose.connect("mongodb://peter:Ranjan%4016062004@ac-gtxzxog-shard-00-00.qoghote.mongodb.net:27017,ac-gtxzxog-shard-00-01.qoghote.mongodb.net:27017,ac-gtxzxog-shard-00-02.qoghote.mongodb.net:27017/lovify?ssl=true&replicaSet=atlas-kbz34u-shard-0&authSource=admin&appName=lovify");
};

export {connectDB};
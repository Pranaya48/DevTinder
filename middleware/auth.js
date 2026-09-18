export const admin = (req,res,next) => {
    console.log("admin middleware is running\n");
    let token = "adminabc";
    let valid = token === "adminabc";
    if(!valid) {
        res.status(401).send("admin is not authorized!!\n");
    };
    next();
};

export const user = (req,res,next) => {
    console.log("user middleware is running\n");
    let token = "userabc";
    let valid = token === "userabc";
    if(!valid) {
        res.status(401).send("user is not authenticated\n");
    };
    next();
};
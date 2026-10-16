
// import validator from "validator";

// const validate = (data) => {
//     const {firstName, lastName, emailId, password} = data;
//     if(!firstName || !lastName) {
//         throw new Error("no first name or last name is given!!");
//     }else if(!validator.isEmail(emailId)) {
//         throw new Error("not a valid email!!");
//     }else if(!validator.isStrongPassword(password)) {
//         throw new Error("password is not strong");
//     };
//     return true;
// };

// export default validate;

// import bcrypt from "bcrypt";

// const data = await bcrypt.hash("homelander", 10);
// // const compare = await bcrypt.hash("homelander", data);
// const compare = await bcrypt.compare("homelander", data);
// console.log(compare);
// console.log(data);

import validator from "validator";

const validate = (data) => {
    const {firstName, lastName, emailId, password} = data;
    if(!firstName || !lastName) {
        throw new Error("no firstName or lastName is provided!!");
    }else if(!validator.isEmail(emailId)) {
        throw new Error("Not a valid emailId");
    }else if(!validator.isStrongPassword(password)) {
        throw new Error("Not a Strong password!!");
    }else if(data?.skills === undefined && (!Array.isArray(data?.skills) || data?.skills.length > 10)) {
        throw new Error("Skills must be an array and must be less than 10");
    };
    return true;
};

export default validate;
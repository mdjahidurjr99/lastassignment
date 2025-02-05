const userModel = require("../models/userModel");
const { EncodeToken } = require("../utility/tokenHelper");
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const RegisterService = async (req) => {
    try {
        let reqBody = req.body;

        // Hash the password before saving
        if (reqBody.password) {
            reqBody.password = await bcrypt.hash(reqBody.password, 10);
        }

        let data = await userModel.create(reqBody);
        return { status: "success", data: data };
    } catch (e) {
        return { status: "fail", message: e.message };
    }
};

const LoginService = async (req) => {
    try {
        let reqBody = req.body;
        let data = await userModel.findOne({ email: reqBody.email });

        if (!data) {
            return { status: "fail", message: "User not found" };
        }

        // Compare the password
        const isMatch = await bcrypt.compare(reqBody.password, data.password);
        if (!isMatch) {
            return { status: "fail", message: "Invalid credentials" };
        }

        let token = EncodeToken(data.email, data._id);
        return { status: "success", token: token, message: "User logged in successfully" };
    } catch (e) {
        return { status: "fail", message: e.message };
    }
};

const ProfileDetailsService = async (req) => {
    try {
        let user_id = req.headers['user_id'];

        // Convert user_id to ObjectId
        user_id = mongoose.Types.ObjectId(user_id);

        let data = await userModel.findById(user_id);

        if (!data) {
            return { status: "fail", message: "User not found" };
        }

        return { status: "success", data: data };
    } catch (e) {
        return { status: "fail", message: e.message };
    }
};

module.exports = {
    RegisterService,
    LoginService,
    ProfileDetailsService
};






// const userModel = require("../models/userModel");
// const mongoose = require("mongoose");
// const { EncodeToken } = require("../utility/tokenHelper");
// const bcrypt = require('bcrypt');
// let ObjectId = mongoose.Types.ObjectId;


// const RegisterService = async (req) => {
//     try {
//         let reqBody = req.body;

//         // Input validation can be added here

//         // Hash the password before saving
//         if (reqBody.password) {
//             reqBody.password = await bcrypt.hash(reqBody.password, 10);
//         }

//         let data = await userModel.create(reqBody);
//         return { status: "success", data: data };
//     } catch (e) {
//         return { status: "fail", message: e.message }; // Changed to fail status
//     }
// }

// const LoginService = async (req) => {
//     try {
//         let reqBody = req.body;
//         let data = await userModel.findOne({ email: reqBody.email });

//         if (!data) {
//             return { status: "fail", message: "User  not found" };
//         }

//         // Compare the password
//         const isMatch = await bcrypt.compare(reqBody.password, data.password);
//         if (!isMatch) {
//             return { status: "fail", message: "Invalid credentials" };
//         }

//         let token = EncodeToken(data.email, data._id);
//         return { status: "success", token: token, message: "User  logged in successfully" };
//     } catch (e) {
//         return { status: "fail", message: e.message }; // Changed to fail status
//     }
// }

// const ProfileDetailsService = async (req) => {
//     try {
//         let user_id = new ObjectId(req.headers['user_id']) 
//         let data = await userModel.findById(user_id); // Using findById for clarity

//         if (!data) {
//             return { status: "fail", message: "User  not found" };
//         }

//         return { status: "success", data: data };
//     } catch (e) {
//         return { status: "fail", message: e.message }; // Changed to fail status
//     }
// }

// module.exports = {
//     RegisterService,
//     LoginService,
//     ProfileDetailsService
// }







// // const userModel = require("../models/userModel");
// // const {EncodeToken} = require("../utility/tokenHelper");


// // const RegisterService = async (req) =>{
// //     try {
// //         let reqBody = req.body;
// //         let data = await userModel.create(reqBody)
// //         return {status: "success", data: data}
// //     }
// //     catch (e){
// //         return {status:"success", data:e.toString()};
// //     }
// // }


// // const LoginService = async (req) => {
// //     try {
// //         let reqBody = req.body;
// //         let data = await userModel.findOne(reqBody);
// //         if(data === null){
// //             return {status: "fail", message: "user not found"};
// //         }else {
// //             let token = EncodeToken(data['email'], data['_id'])
// //             return {status:"success", token : token, message: "User Login Successfully"};
// //         }
// //     }
// //     catch (e){
// //         return {status:"success", data:e.toString()};
// //     }
// // }

// // const ProfileDetailsService = async (req) => {
// //     try {
// //         let user_id  = req.headers['user_id'];
// //         let data = await userModel.findOne({"_id": user_id });
// //         return {status: "success", data: data}

// //     }
// //     catch (e){
// //         return {status:"success", data:e.toString()};
// //     }

// // }

// // module.exports = {
// //     RegisterService,
// //     LoginService,
// //     ProfileDetailsService
// // }
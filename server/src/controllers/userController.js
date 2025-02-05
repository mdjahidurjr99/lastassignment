const {RegisterService, LoginService, ProfileDetailsService} = require("../services/userService");

//Registration
exports.Register = async (req, res) => {
    let result = await RegisterService(req);
    return res.status(200).json(result);
}

//Login
exports.Login = async (req, res) => {
    let result = await LoginService(req);
    return res.status(200).json(result);
}

//Profile Details
exports.ProfileDetails = async (req, res) => {
    let result = await ProfileDetailsService(req);
    return res.status(200).json(result);
}
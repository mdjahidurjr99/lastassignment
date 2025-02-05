const contactModel = require("../models/contactModel");


const SaveContactService = async (req) => {
    try {
        let reqBody = req.body;
    let data = await contactModel.create(reqBody);
    return {status: "success", data: data};
    } catch (e) {
        return {status:"success", data:e.toString()};
    }
}

module.exports ={
    SaveContactService
}
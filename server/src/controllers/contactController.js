const { SaveContactService } = require("../services/contactService");



exports.CreateContact = async (req, res) => {
    let result=await SaveContactService(req)
    return res.status(200).json(result)
};
const teamModel = require("../models/teamModel")
const mongoose = require("mongoose")
let ObjectId = mongoose.Types.ObjectId;

//Create Blog
const createTeamService = async (req) => {
    try {
        let reqBody = req.body;
        let data = await teamModel.create(reqBody);
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}


//Read All Team
const readAllTeamService = async () => {
    try{
        let data = await teamModel.find();
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}


// Read Single Team
const readSingleTeamService = async (req) => {
    try {
        let id = new ObjectId(req.params.id)
        let data = await teamModel.findOne({"_id": id})
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}

//Update Single Team
const updateTeamService = async (req) => {
    try {
        let id = new ObjectId(req.params.id);
        let reqBody = req.body;
        let data = await teamModel.updateOne({"_id":id }, reqBody);
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}

//Delete Single Team
const deleteTeamService = async (req) => {
    try {
        let id = new ObjectId(req.params.id);
        let data = await teamModel.deleteOne({"_id":id})
        return {status:"success", message:"Successfully deleted blog"};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}


module.exports={
    createTeamService,
    readAllTeamService,
    readSingleTeamService,
    updateTeamService,
    deleteTeamService
}
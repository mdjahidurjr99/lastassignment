const mongoose = require('mongoose');
const serviceModel = require('../models/serviceModel')
let ObjectId = mongoose.Types.ObjectId;

const CreateServices = async (req) => {
    try {
        let reqBody = req.body;
        let data = await serviceModel.create(reqBody)
        return {status: "success", data: data}
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}

const ReadAllServices = async () => {
    try{
        let data = await serviceModel.find();
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}


// Read Single Blog
const ReadSingleServices = async (req) => {
    try {
        let id = new ObjectId(req.params.id)
        let data = await serviceModel.findOne({"_id": id})
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}


//Update Single Blog
const UpdateServices = async (req) => {
    try {
        let id = new ObjectId(req.params.id);
        let reqBody = req.body;
        let data = await serviceModel.updateOne({"_id":id }, reqBody);
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}

//Delete Single Blog
const DeleteServices = async (req) => {
    try {
        let id = new ObjectId(req.params.id);
        let data = await serviceModel.deleteOne({"_id":id})
        return {status:"success", message:"Successfully deleted blog"};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}


module.exports={
    CreateServices,
    ReadAllServices,
    ReadSingleServices,
    UpdateServices,
    DeleteServices
}
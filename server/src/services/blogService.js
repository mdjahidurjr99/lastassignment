const blogModel = require("../models/blogModel")
const mongoose = require("mongoose")
let ObjectId = mongoose.Types.ObjectId;

//Create Blog
const createBlogService = async (req) => {
    try {
        let reqBody = req.body;
        let data = await blogModel.create(reqBody);
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}


//Read All Blog
const readAllBlogService = async () => {
    try{
        let data = await blogModel.find();
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}


// Read Single Blog
const readSingleBlogService = async (req) => {
    try {
        let id = new ObjectId(req.params.id)
        let data = await blogModel.findOne({"_id": id})
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}

//Update Single Blog
const updateBlogService = async (req) => {
    try {
        let id = new ObjectId(req.params.id);
        let reqBody = req.body;
        let data = await blogModel.updateOne({"_id":id }, reqBody);
        return {status:"success", data:data};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}

//Delete Single Blog
const deleteBlogService = async (req) => {
    try {
        let id = new ObjectId(req.params.id);
        let data = await blogModel.deleteOne({"_id":id})
        return {status:"success", message:"Successfully deleted blog"};
    }
    catch (e){
        return {status:"success", data:e.toString()};
    }
}


module.exports={
    createBlogService,
    readAllBlogService,
    readSingleBlogService,
    updateBlogService,
    deleteBlogService
}
const {readAllBlogService, createBlogService, readSingleBlogService, updateBlogService, deleteBlogService}= require("../services/blogService") ;

// create blog
exports.createBlog = async (req, res) => {
    let result = await createBlogService(req);
    return res.status(200).json(result)
};

// all Blog Read
exports.allBlogRead = async (req, res) => {
    let result = await readAllBlogService();
    return res.status(200).json(result);
};

// single Blog Read
exports.singleBlogRead = async (req, res) => {
    let result = await readSingleBlogService(req);
    return res.status(200).json(result);
};

// single Blog Update
exports.updateBlog = async (req, res) => {
    let result = await updateBlogService(req);
    return res.status(200).json(result);
};

// single Blog Delete
exports.deleteBlog = async (req, res) => {
    let result = await deleteBlogService(req);
    return res.status(200).json(result);
};
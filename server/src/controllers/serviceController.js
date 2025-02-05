const {CreateServices, ReadAllServices, ReadSingleServices, UpdateServices, DeleteServices}= require("../services/service")

exports.CreateService = async (req, res) => {
    let result = await CreateServices(req);
    return res.status(200).json(result);
}


exports.ReadAllService = async (req, res) => {
    let result = await ReadAllServices();
    return res.status(200).json(result);
}

exports.ReadSingleService = async (req, res) => {
    let result = await ReadSingleServices(req);
    return res.status(200).json(result);
}

exports.UpdateService = async (req, res) => {
    let result = await UpdateServices(req);
    return res.status(200).json(result);
}

exports.DeleteService = async (req, res) => {
    let result = await DeleteServices(req);
    return res.status(200).json(result);
}
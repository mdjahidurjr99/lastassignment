const {readAllTeamService, createTeamService, readSingleTeamService, updateTeamService, deleteTeamService}= require("../services/teamService") ;

// create blog
exports.CreateTeam = async (req, res) => {
    let result = await createTeamService(req);
    return res.status(200).json(result)
};

// all Team Read
exports.ReadAllTeam = async (req, res) => {
    let result = await readAllTeamService();
    return res.status(200).json(result);
};

// single Team Read
exports.ReadSingleTeam = async (req, res) => {
    let result = await readSingleTeamService(req);
    return res.status(200).json(result);
};

// single Team Update
exports.UpdateTeam = async (req, res) => {
    let result = await updateTeamService(req);
    return res.status(200).json(result);
};

// single Team Delete
exports.DeleteTeam = async (req, res) => {
    let result = await deleteTeamService(req);
    return res.status(200).json(result);
};
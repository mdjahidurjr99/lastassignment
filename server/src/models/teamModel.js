const mongoose = require('mongoose');

const  DataSchema = mongoose.Schema({
        name: {type: String, required: true},
        role: {type: String, required: true},
        image: {type: String, required: true},
    },
    {timestamps: true, versionKey: false}

)

const teamModel = mongoose.model('teams', DataSchema);
module.exports = teamModel;
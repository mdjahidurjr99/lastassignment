const mongoose = require('mongoose');

const  DataSchema = mongoose.Schema({
        title: {type: String, required: true},
        description: {type: String, required: true},
    },
    {timestamps: true, versionKey: false}

)

const serviceModel = mongoose.model('services', DataSchema);
module.exports = serviceModel;
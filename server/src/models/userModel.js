const mongoose = require('mongoose');

const  DataSchema = mongoose.Schema({
        email: {type: String, unique: true, lowerCase:true, required: true},
        password: {type: String, required: true},
        firstName: { type: String },
        lastName: { type: String },
        phone: { type: String },
        img: { type: String },
    },
    {timestamps: true, versionKey: false}

)

const userModel = mongoose.model('users', DataSchema);
module.exports = userModel;
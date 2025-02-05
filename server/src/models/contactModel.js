const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const contactModel = mongoose.model("contacts", dataSchema);

module.exports = contactModel;

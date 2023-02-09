const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema(
    {
        name: { type: String, required: true },
        patientId: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = patientSchema
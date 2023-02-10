const mongoose = require('mongoose')

const Schema = mongoose.Schema

const patientSchema = new Schema(
    {
        name: { type: String, required: true },
        patientId: { type: Schema.Types.ObjectId, ref: 'Patient' },
    },
    { timestamps: true },
)

module.exports = patientSchema
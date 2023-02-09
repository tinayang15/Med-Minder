const { Schema } = require('mongoose')

const medicationSchema = new Schema(
    {
        Name: { type: String, required: true },
        Dose: { type: String, required: true },
        Prescription: { type: String, required: true },
    },
    { timestamps: true }
)

module.exports = medicationSchema
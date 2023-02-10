const { Schema } = require('mongoose')

const medicationSchema = new Schema(
    {
        Name: { type: String, required: true },
        Dose: { type: String, required: true },
        Prescription: { type: String, required: true },
        patientId: { type: Schema.Types.ObjectId, ref: 'Patient' }
    },
    { timestamps: true }
)

module.exports = medicationSchema
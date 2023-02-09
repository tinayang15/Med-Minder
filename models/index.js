const mongoose = require('mongoose')
const medicationSchema = require('./medication')
const patientSchema = require('./patient')

const Medication = mongoose.model('Medication', medicationSchema)
const Patient = mongoose.model('Patient', patientSchema)

module.exports = {
    Medication,
    Patient
}
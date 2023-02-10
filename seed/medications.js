const db = require('../db')
const { Medication } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const medications = [
        { Name: 'Medication One', Dose: '10mg', Prescription: 'Take 1 tablet in the morning, afternoon and evening.', patientId: 12345 },
        { Name: 'Medication Two', Dose: '12mg', Prescription: 'Take 1 tablet before bedtime or as needed for muscle spasms', patientId: 12345 },
        { Name: 'Medication Three', Dose: '3mg/2.5mL', Prescription: 'Take 5ml in the morning, afternoon and evening.', patientId: 12345 },
    ]

    await Medication.insertMany(medications)
    console.log("Added medications!")
}
const run = async () => {
    await main()
    db.close()
}

run()

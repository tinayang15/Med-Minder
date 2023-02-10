const db = require('../db')
const { Patient, Medication } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const patient1 = await new Patient({
        name: 'Tina Yang',
    })
    patient1.save()

    const patient2 = await new Patient({
        name: 'Timothy Smith'
    })
    patient2.save()


    const medications = [
        { Name: 'Medication One', Dose: '10mg', Prescription: 'Take 1 tablet in the morning, afternoon and evening.', Patient: patient1._id },
        { Name: 'Medication Two', Dose: '12mg', Prescription: 'Take 1 tablet before bedtime or as needed for muscle spasms', Patient: patient1._id },
        { Name: 'Medication Three', Dose: '3mg/2.5mL', Prescription: 'Take 5ml in the morning, afternoon and evening.', Patient: patient2._id },
    ]
    await Medication.insertMany(medications)
    console.log("Added medications!")
}

const run = async () => {
    await main()
    db.close()
}

run()
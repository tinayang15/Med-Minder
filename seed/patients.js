const db = require('../db')
const { Patient } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const patients = [
        { name: 'Patient One', patientId: '63e569d1d0d4f0a69c0ea652' },
    ]

    await Patient.insertMany(patients)
    console.log("Added patients!")
}
const run = async () => {
    await main()
    db.close()
}

run()

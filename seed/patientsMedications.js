const db = require('../db')
const { Patient, Medication } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const patient1 = await new Patient({
        name: 'Jane Doe'
    })
    patient1.save()

    const patient2 = await new Patient({
        name: 'John Doe'
    })
    patient2.save()
    const patient3 = await new Patient({
        name: 'Jonny Doe'
    })
    patient3.save()
    const patient4 = await new Patient({
        name: 'Janny Doe'
    })
    patient4.save()
    const patient5 = await new Patient({
        name: 'Mary Doe'
    })
    patient5.save()
    const patient6 = await new Patient({
        name: 'Matthew Doe'
    })
    patient6.save()


    const medications = [
        { Name: 'Naproxen', Dose: '10mg', Prescription: 'Take 1 tablet in the morning, afternoon and evening.', patientId: patient1._id },
        { Name: 'Cyclobenzaprine', Dose: '12mg', Prescription: 'Take 1 tablet before bedtime or as needed for muscle spasms', patientId: patient1._id },
        { Name: 'Amoxicillin', Dose: '3mg/2.5mL', Prescription: 'Take 5ml in the morning, afternoon and evening.', patientId: patient1._id },
        { Name: 'Naproxen', Dose: '10mg', Prescription: 'Take 1 tablet in the morning, afternoon and evening.', patientId: patient2._id },
        { Name: 'Cyclobenzaprine', Dose: '12mg', Prescription: 'Take 1 tablet before bedtime or as needed for muscle spasms', patientId: patient2._id },
        { Name: 'Amoxicillin', Dose: '3mg/2.5mL', Prescription: 'Take 5ml in the morning, afternoon and evening.', patientId: patient2._id },
        { Name: 'Naproxen', Dose: '10mg', Prescription: 'Take 1 tablet in the morning, afternoon and evening.', patientId: patient3._id },
        { Name: 'Cyclobenzaprine', Dose: '12mg', Prescription: 'Take 1 tablet before bedtime or as needed for muscle spasms', patientId: patient3._id },
        { Name: 'Amoxicillin', Dose: '3mg/2.5mL', Prescription: 'Take 5ml in the morning, afternoon and evening.', patientId: patient3._id },
        { Name: 'Naproxen', Dose: '10mg', Prescription: 'Take 1 tablet in the morning, afternoon and evening.', patientId: patient4._id },
        { Name: 'Cyclobenzaprine', Dose: '12mg', Prescription: 'Take 1 tablet before bedtime or as needed for muscle spasms', patientId: patient4._id },
        { Name: 'Amoxicillin', Dose: '3mg/2.5mL', Prescription: 'Take 5ml in the morning, afternoon and evening.', patientId: patient4._id },
        { Name: 'Naproxen', Dose: '10mg', Prescription: 'Take 1 tablet in the morning, afternoon and evening.', patientId: patient5._id },
        { Name: 'Cyclobenzaprine', Dose: '12mg', Prescription: 'Take 1 tablet before bedtime or as needed for muscle spasms', patientId: patient5._id },
        { Name: 'Amoxicillin', Dose: '3mg/2.5mL', Prescription: 'Take 5ml in the morning, afternoon and evening.', patientId: patient5._id },
        { Name: 'Naproxen', Dose: '10mg', Prescription: 'Take 1 tablet in the morning, afternoon and evening.', patientId: patient6._id },
        { Name: 'Cyclobenzaprine', Dose: '12mg', Prescription: 'Take 1 tablet before bedtime or as needed for muscle spasms', patientId: patient6._id },
        { Name: 'Amoxicillin', Dose: '3mg/2.5mL', Prescription: 'Take 5ml in the morning, afternoon and evening.', patientId: patient6._id },
        { Name: 'Naproxen', Dose: '10mg', Prescription: 'Take 1 tablet in the morning, afternoon and evening.', patientId: patient1._id },
        { Name: 'Cyclobenzaprine', Dose: '12mg', Prescription: 'Take 1 tablet before bedtime or as needed for muscle spasms', patientId: patient2._id },
        { Name: 'Amoxicillin', Dose: '3mg/2.5mL', Prescription: 'Take 5ml in the morning, afternoon and evening.', patientId: patient3._id },
    ]
    await Medication.insertMany(medications)
    console.log("Added medications!")
}

const run = async () => {
    await main()
    // db.close()
}

run()
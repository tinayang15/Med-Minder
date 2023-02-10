const { Medication, Patient } = require('../models/index')

const createPatient = async (req, res) => {
    try {
        const patient = await new Patient(req.body)
        await patient.save()
        return res.status(201).json({
            patient,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find()
        return res.status(200).json({ patients })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getPatientById = async (req, res) => {
    try {
        const { id } = req.params;
        const patient = await Patient.findById(id)
        if (patient) {
            return res.status(200).json({ patient });
        }
        return res.status(404).send('Patient with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(patient)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deletePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Patient.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Patient deleted');
        }
    } catch (error) {
        return res.status(500).send(error.message);
    }
}



const createMedication = async (req, res) => {
    try {
        const { id } = req.params
        req.body = { ...req.body, patientId: id }
        const medication = await new Medication(req.body)
        await medication.save()
        return res.status(201).json({
            medication,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllMedications = async (req, res) => {
    try {
        const { id } = req.params
        const medications = await Medication.find({ patientId: id })
        return res.status(200).json(medications)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// const getMedicationById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const medication = await Medication.findById(id)
//         if (medication) {
//             return res.status(200).json({ medication });
//         }
//         return res.status(404).send('Medication with the specified ID does not exists');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// const updateMedication = async (req, res) => {
//     try {
//         const medication = await Medication.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         res.status(200).json(medication)
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// const deleteMedication = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleted = await Medication.findByIdAndDelete(id)
//         if (deleted) {
//             return res.status(200).send('Medication deleted');
//         }
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

module.exports = {
    createPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient,
    createMedication,
    getAllMedications,
    // getMedicationById,
    // updateMedication,
    // deleteMedication,
}
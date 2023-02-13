const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))



router.post('/patients', controllers.createPatient)

router.get('/patients', controllers.getAllPatients)

router.get('/patients/:id', controllers.getPatientById)

router.put('/patients/:id', controllers.updatePatient)

router.delete('/patients/:id', controllers.deletePatient)



router.post('/patients/:id/medications', controllers.createMedication)

router.get('/patients/:id/medications', controllers.getAllMedications)

router.get('/patients/:id/medications/:id', controllers.getMedicationById)

router.put('/patients/:id/medications/:id', controllers.updateMedication)

router.delete('/patients/:id/medications/:id', controllers.deleteMedication)

module.exports = router;
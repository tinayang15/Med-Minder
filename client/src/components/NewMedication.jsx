import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const NewMedication = () => {
    let navigate = useNavigate()
    const { patientId } = useParams()
    const [newMedication, setNewMedication] = useState({
        Name: '', Dose: '', Prescription: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newMedicationPackage = {
            Name: newMedication.Name,
            Dose: newMedication.Dose,
            Prescription: newMedication.Prescription,
        }
        const response =
            await axios.post(`/home/patients/${patientId}/medications`, newMedicationPackage)
        navigate(`/medicationslist/${patientId}`)
    }
    const handleChangeTwo = (e) => {
        setNewMedication({
            ...newMedication, [e.target.name]: e.target.value
        })
    }
    return (
        <main className='NewMedication'>
            <h2> New Medication </h2>
            <form className='newMedicationForm'
                onSubmit={handleSubmit}
            >
                <label htmlFor='medicationName'>Medication Name</label>
                <input
                    id='postMedicationName'
                    type='text'
                    required
                    value={newMedication.Name}
                    placeholder={'Medication Name'}
                    onChange={handleChangeTwo}
                    name='Name'
                    className='newMedicationName'
                />
                <label htmlFor='medicationDose'>Dose</label>
                <input
                    id='postMedicationDose'
                    type='text'
                    required
                    value={newMedication.Dose}
                    placeholder={'Dose'}
                    onChange={handleChangeTwo}
                    name='Dose'
                    className='newMedicationDose'
                />
                <label htmlFor='medicationPrescription'>Prescription</label>
                <input
                    id='postMedicationPrescription'
                    type='text'
                    required
                    value={newMedication.Prescription}
                    placeholder={'Prescription'}
                    onChange={handleChangeTwo}
                    name='Prescription'
                    className='newMedicationPrescription'
                />
                <button type='submit' className='newMedicationSubmit'>Submit</button>
            </form>

        </main>
    )
}
export default NewMedication
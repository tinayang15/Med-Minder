import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const NewMedication = () => {
    let navigate = useNavigate()
    const { patientId } = useParams()
    const [newMedication, setNewMedication] = useState({
        Name: '', Dose: '', Prescription: ''
        // , patientId: '' 
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newMedicationPackage = {
            Name: newMedication.Name,
            Dose: newMedication.Dose,
            Prescription: newMedication.Prescription,
            // patientId: newMedication.patientId
        }
        console.log(newMedication)
        const response =
            await axios.post(`http://localhost:3001/home/patients/${patientId}/medications`, newMedicationPackage)
        navigate(`/medicationslist/${patientId}`)
    }
    const handleChangeTwo = (e) => {
        console.log(e.target.value)
        setNewMedication({
            ...newMedication, [e.target.name]: e.target.value
        })
        console.log(newMedication)
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
                />
                <button type='submit'>Submit</button>
            </form>

        </main>
    )
}
export default NewMedication
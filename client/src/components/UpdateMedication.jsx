import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const UpdateMedication = () => {
    let navigate = useNavigate()
    const { medicationId } = useParams()
    const { medicationName } = useParams()
    const { medicationPrescription } = useParams()
    const { medicationDose } = useParams()
    const { patientId } = useParams()
    // console.log(medicationId)
    const [updateMedication, setUpdateMedication] = useState({ Name: `${medicationName}`, Dose: `${medicationDose}`, Prescription: `${medicationPrescription}`, patientId: `${patientId}` })
    // console.log(updateMedication)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updateMedicationPackage = {
            Name: updateMedication.Name,
            Dose: updateMedication.Dose,
            Prescription: updateMedication.Prescription
        }
        console.log(updateMedication)
        let response = await axios.put(`http://localhost:3001/home/patients/${patientId}/medications/${medicationId}`, updateMedicationPackage)
        navigate(`/medicationslist/${patientId}`)
    }


    const handleChangeThree = (e) => {
        console.log(e.target.value)
        setUpdateMedication({
            ...updateMedication, [e.target.name]: e.target.value
        })
        console.log(updateMedication)
    }
    return (
        <main className='UpdateMedication'>
            <h2> Update Medication </h2>
            <form className='updateMedicationForm'
                onSubmit={handleSubmit}
            >
                <label htmlFor='medicationName'>Medication Name</label>
                <input
                    id='putMedicationName'
                    type='text'
                    required
                    value={updateMedication.Name}
                    placeholder={'Medication Name'}
                    onChange={handleChangeThree}
                    name='Name'
                />
                <label htmlFor='medicationDose'>Dose</label>
                <input
                    id='putMedicationDose'
                    type='text'
                    required
                    value={updateMedication.Dose}
                    placeholder={'Dose'}
                    onChange={handleChangeThree}
                    name='Dose'
                />
                <label htmlFor='medicationPrescription'>Prescription</label>
                <input
                    id='putMedicationPrescription'
                    type='text'
                    required
                    value={updateMedication.Prescription}
                    placeholder={'Prescription'}
                    onChange={handleChangeThree}
                    name='Prescription'
                />
                <button type='submit'>Submit</button>
            </form>

        </main>
    )
}
export default UpdateMedication
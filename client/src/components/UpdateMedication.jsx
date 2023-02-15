import { useNavigate, useParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const UpdateMedication = () => {
    let navigate = useNavigate()
    const location = useLocation()
    const { meds } = location.state
    const { medication } = useParams()
    const { patientId } = useParams()


    const [updateMedication, setUpdateMedication] = useState({ Name: `${meds.Name}`, Dose: `${meds.Dose}`, Prescription: `${meds.Prescription}`, patientId: `${patientId}` })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updateMedicationPackage = {
            Name: updateMedication.Name,
            Dose: updateMedication.Dose,
            Prescription: updateMedication.Prescription
        }
        const response = await axios.put(`/home/patients/${patientId}/medications/${meds._id}`, updateMedicationPackage)
        navigate(`/medicationslist/${patientId}`)
    }


    const handleChangeThree = (e) => {
        setUpdateMedication({
            ...updateMedication, [e.target.name]: e.target.value
        })
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

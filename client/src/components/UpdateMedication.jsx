import { useNavigate, useParams, useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const UpdateMedication = () => {
    let navigate = useNavigate()
    const location = useLocation()
    const { meds } = location.state
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
        <main>
            <div className='updateMedication'>
                <h2 className='updateTitle'> Update Medication Form </h2>
                <form className='updateMedicationForm'
                    onSubmit={handleSubmit}
                >
                    <div className='updateMeds'>
                        <label htmlFor='medicationName'>Medication Name</label>
                        <input
                            id='putMedicationName'
                            type='text'
                            required
                            value={updateMedication.Name}
                            placeholder={'Medication Name'}
                            onChange={handleChangeThree}
                            name='Name'
                            className='updateMedicationName'
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
                            className='updateMedicationDose'
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
                            className='updateMedicationPrescription'
                        />
                        <button type='submit' className='updateMedicationSubmit'>Submit</button>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default UpdateMedication



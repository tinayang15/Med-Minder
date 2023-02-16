import { Link, useNavigate } from 'react-router-dom'
import UpdateMedication from './UpdateMedication'
import { FaTrashAlt } from 'react-icons/fa'
import axios from 'axios'



const Medication = ({ medication, patientId, getPatient }) => {

    let navigate = useNavigate()


    const handleDelete = async (id) => {
        console.log(medication)
        await axios.delete(`/home/patients/${patientId}/medications/${id}`)
        getPatient()
    }

    return (
        <div>
            <div className='medicationNameButton'>
                <h3 className='medicationName'>Medication Name: {medication.Name}</h3>
                <Link to={`/medicationslist/${patientId}/update/${medication}`} state={{ meds: medication }}>
                    <button className='updateMedicationButton'>Update Medication</button>
                </Link>

                <FaTrashAlt
                    onClick={() => handleDelete(medication._id)}
                    role='button'
                    tabIndex='0'
                    aria-label={`Delete ${medication}`}
                    className='delete'
                />
            </div>
            <p className='dose'>Dose: {medication.Dose}</p>
            <p className='prescription'>Prescription Details: {medication.Prescription} </p>
            <br /><br />
        </div>
    )
}
export default Medication
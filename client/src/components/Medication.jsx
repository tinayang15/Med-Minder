import { Link, useNavigate } from 'react-router-dom'
import UpdateMedication from './UpdateMedication'
import { FaTrashAlt } from 'react-icons/fa'
import axios from 'axios'



const Medication = ({ medication, patientId, getPatient }) => {

    let navigate = useNavigate()


    const handleDelete = async (id) => {
        console.log(medication)
        await axios.delete(`http://localhost:3001/home/patients/${patientId}/medications/${id}`)
        getPatient()

    }

    return (
        <div>
            <h3>Medication Name: {medication.Name}</h3>
            <Link to={`/medicationslist/${patientId}/update/${medication}`} state={{ meds: medication }}>
                <button>Update Medication</button>
            </Link>
            <FaTrashAlt
                onClick={() => handleDelete(medication._id)}
                role='button'
                tabIndex='0'
                aria-label={`Delete ${medication}`}
            />
            <p>Dose: {medication.Dose}</p>
            <p>Prescription Details: {medication.Prescription} </p>
        </div>
    )
}
export default Medication
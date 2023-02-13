import { Link } from 'react-router-dom'
import UpdateMedication from './UpdateMedication'

const Medication = ({ medication, patientId }) => {
    return (
        <div>
            <h3>Medication Name: {medication.Name}</h3>
            <Link to={`/medicationslist/${patientId}/update/${medication.Name}/${medication.Dose}/${medication.Prescription}/${medication._id}`}>
                <button>Update Medication</button>
            </Link>
            <p>Dose: {medication.Dose}</p>
            <p>Prescription Details: {medication.Prescription} </p>
        </div>
    )
}
export default Medication
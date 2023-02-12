import { Link } from 'react-router-dom'
import MedicationList from './MedicationList'

const Patient = ({ patient }) => {
    return (
        <div>

            <ul>
                <Link to={`/medicationslist/${patient._id}`} >
                    <li>
                        <p className='PatientName'>Patient Name: {patient.name}</p>
                    </li>
                </Link>
            </ul>


        </div>
    )
}
export default Patient
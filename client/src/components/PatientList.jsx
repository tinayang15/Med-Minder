import { Link } from 'react-router-dom'
import Patient from './Patient'

const PatientList = ({ patients }) => {
    return (
        <div>
            <h1> Patient List</h1>

            <Link to='/newpatient'>
                <button>Add Patient</button>
            </Link>
            <Patient patients={patients} />

        </div>
    )
}
export default PatientList
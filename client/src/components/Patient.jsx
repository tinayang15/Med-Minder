import { Link } from 'react-router-dom'

const Patient = ({ patients }) => {
    return (
        <div>
            {patients.map((patient) => (
                <ul>
                    <Link to='/medicationslist'>
                        <li>
                            <p className='PatientName'>Patient Name: {patient.name}</p>
                            {/* <p className='PatientId'>Patient Id: {patient.id}</p> */}
                        </li>
                    </Link>
                </ul>
            ))}

        </div>
    )
}
export default Patient
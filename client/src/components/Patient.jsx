import { Link } from 'react-router-dom'

const Patient = ({ patient }) => {
    return (
        <div>

            <ul>
                <Link to='/medicationslist'>
                    <li>
                        <p className='PatientName'>Patient Name: {patient.name}</p>
                    </li>
                </Link>
            </ul>


        </div>
    )
}
export default Patient
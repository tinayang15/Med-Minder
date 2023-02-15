import { Link } from 'react-router-dom'
import Patient from './Patient'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PatientList = () => {
    const [patients, setPatients] = useState([])

    const getPatients = async (e) => {
        try {
            const res = await axios.get('/home/patients')
            setPatients(res.data.patients)
            // console.log(res.data.patients)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPatients()
    }, [])

    return (
        <div className='patientList'>
            <h1 className='patientListTitle'> Patient List</h1>
            {/* <Link to='/newpatient'>
                <button>Add Patient</button>
            </Link> */}
            {patients.map((patient) => (
                < div key='patient._id' >
                    <Patient patient={patient} />
                </div>
            ))
            }
        </div >
    )
}
export default PatientList
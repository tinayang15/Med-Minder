import { Link } from 'react-router-dom'
import Patient from './Patient'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PatientList = () => {
    const [patients, setPatients] = useState([])

    const getPatients = async (e) => {
        try {
            const res = await axios.get('http://localhost:3001/home/patients')
            setPatients(res.data.patients)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPatients()
    }, [])

    return (
        <div>
            <h1> Patient List</h1>
            <Link to='/newpatient'>
                <button>Add Patient</button>
            </Link>
            {patients.map((patient) => (
                <div key='patients._id'>
                    <Patient patient={patient} />
                </div>
            ))}
        </div>
    )
}
export default PatientList
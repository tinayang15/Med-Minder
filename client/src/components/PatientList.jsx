import { Link } from 'react-router-dom'
import Patient from './Patient'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PatientList = () => {
    // get all patients and saved to local state
    const [patients, setPatients] = useState([])

    const getPatients = async (e) => {
        // console.log('banana')
        try {
            let res = await axios.get('http://localhost:3001/home/patients')
            console.log(res.data.patients)
            setPatients(res.data.patients)
            console.log(patients)
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
            {/* map over patients and create a new patient component */}
            {patients.map((patient) => (
                <Patient patient={patient} />
            ))}
        </div>
    )
}
export default PatientList
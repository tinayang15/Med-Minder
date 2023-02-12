import Medication from './Medication'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const MedicationList = ({ }) => {
    const [medications, setMedications] = useState([])
    const { patientId } = useParams()

    const getPatientIdMedications = async (e) => {
        console.log('meds')
        try {
            let res = await axios.get(`http://localhost:3001/home/patients/${patientId}/medications`)
            console.log(res)
            setMedications(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPatientIdMedications()
    }, [])

    return (
        <div>
            <h2 className='MedicationList'>Medication List</h2>
            <Link to='/newmedication'>
                <button>Add Medication</button>
            </Link>
            <p>
                {medications.map((medication) => (
                    <Medication medication={medication} />))}
            </p>
        </div>
    )
}
export default MedicationList
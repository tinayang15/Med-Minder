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
            let res = await axios.get(`/home/patients/${patientId}/medications`)
            setMedications(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getPatientIdMedications()
    }, [])

    return (
        <div className='medications'>
            <h2 className='MedicationList'>Medication List</h2>
            <Link to={`/medicationslist/${patientId}/newmedication`}>
                <button className='newMedicationButton'>Add Medication</button>
            </Link>
            <div className='medicationsMap'>

                {medications.map((medication) => (
                    <Medication medication={medication} patientId={patientId} getPatient={getPatientIdMedications} />))}
            </div>
        </div>
    )
}
export default MedicationList
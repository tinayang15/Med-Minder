import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import '../NewPatient.css'

const NewPatient = () => {

    let navigate = useNavigate()

    const [newPatient, setNewPatient] = useState({
        name: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPatientPackage = {
            name: newPatient.name
        }
        const response =
            await axios.post('/home/patients', newPatientPackage)
        navigate('/')
    }

    const handleChange = (e) => {
        setNewPatient({
            [e.target.name]: e.target.value
        })
    }

    return (
        <main className='NewPatient'>
            <h2> New Patient </h2>
            <form className='newPatientForm'
                onSubmit={handleSubmit}
            >
                <label htmlFor='patientName'></label>
                {/* <div className='newInputSubmit'> */}
                <input
                    id='postName'
                    type='text'
                    required
                    value={newPatient.name}
                    placeholder={'Patient Full Name'}
                    onChange={handleChange}
                    name='name'
                    className='newPatientInput'
                />
                <br />
                <button type='submit' className='newPatientButton'>Submit</button>
                {/* </div> */}
            </form>

        </main>
    )
}
export default NewPatient
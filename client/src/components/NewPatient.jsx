import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

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
        console.log(newPatient)
        let response =
            await axios.post('http://localhost:3001/home/patients', newPatientPackage)
        navigate('/')
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setNewPatient({
            // ...newPatient, [e.target.name]:
            [e.target.name]: e.target.value
        })
        console.log(newPatient)
    }

    return (
        <main className='NewPatient'>
            <h2> New Patient </h2>
            <form className='newPatientForm'
                onSubmit={handleSubmit}
            >
                <label htmlFor='patientName'>Name</label>
                <input
                    id='postName'
                    type='text'
                    required
                    value={newPatient.name}
                    placeholder={'Full Name'}
                    // onChange={(e) => setPatientName(e.target.value)}
                    onChange={handleChange}
                    name='name'
                />
                {/* <label htmlFor='patientId'>Id Number</label>
                <input
                id='patientId'
                type='text'
                required
                value={newPatient.id}
                placeholder={'Patient Id Number'}
                // onChange={(e) => setPatientId(e.target.value)}
                onChange={handleChange}
            /> */}
                {/* <Link to='/'> */}
                <button type='submit'>Submit</button>
                {/* </Link> */}
            </form>

        </main>
    )
}
export default NewPatient
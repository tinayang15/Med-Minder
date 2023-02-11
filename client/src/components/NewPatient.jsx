import { useNavigate, Link } from 'react-router-dom'

const NewPatient = ({ newPatient, handleChange, addPatient }) => {

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        newPatient.addPatient(e)
        navigate('/')
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
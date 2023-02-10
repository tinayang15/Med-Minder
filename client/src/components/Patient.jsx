const Patient = ({ patients }) => {
    return (
        <div>
            {patients.map((patient) => (
                <ul>
                    <li>
                        <p className='PatientName'>Patient Name: {patient.name}</p>
                        <p className='PatientId'>Patient Id: {patient.id}</p>
                    </li>
                </ul>
            ))}

        </div>
    )
}
export default Patient
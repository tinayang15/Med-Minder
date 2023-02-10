import Patient from './Patient'

const PatientList = ({ patients }) => {
    return (
        <div>
            <h1> Patient List</h1>
            <Patient patients={patients} />
        </div>
    )
}
export default PatientList
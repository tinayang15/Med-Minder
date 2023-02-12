const Medication = ({ medication }) => {
    return (
        <div>
            <h3>Medication Name: {medication.Name}</h3>
            <p>Dose: {medication.Dose}</p>
            <p>Prescription Details: {medication.Prescription} </p>
        </div>
    )
}
export default Medication
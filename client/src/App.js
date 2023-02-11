import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import PatientList from './components/PatientList'
// import Nav from './components/Nav'
import Header from './components/Header'
import NewPatient from './components/NewPatient';
import MedicationList from './components/MedicationList'

function App() {

  const [patients, setPatients] = useState([
    {
      name: 'Jane Doe',
      // id: '12345'
    },
    {
      name: 'John Doe',
      // id: '54321'
    },
  ])

  const [newPatient, setNewPatient] = useState({
    name: '',
    // id: '',
  })

  const addPatient = (e) => {
    e.preventDefault()
    const currentPatients = patients
    const createdPatient = {
      newPatient,
      // name: ,
      // id: patients.id
    }
    currentPatients.push(createdPatient)
    setPatients(currentPatients)
    setNewPatient({ name: '' })
  }

  const handleChange = (e) => {
    setNewPatient({
      // ...newPatient, [e.target.name]:
      newPatient, [e.target.name]: e.target.value
    })
  }

  // SEARCH Bar
  //   const [search, setSearch] = useState('')
  //   const [searchResults, setSearchResults] = useState([])

  //   useEffect(() => {
  //   const filteredResults = patients.filter(patient =>
  //   ((patient.body).toLowerCase()).includes(search.toLowerCase()) || ((patient.title).toLowerCase()).includes(search.toLowerCase()))
  //   setSearchResults(filteredResults.reverse())
  // }, [patients, search])

  return (
    // nav bar for home (PatientList) - medication list if I have time
    // add search bar
    <div className="App">
      <Header title='Med Minder' />
      {/* <Nav search={search} setSearch={setSearch} /> */}
      <main>
        <Routes>
          <Route path='/' element={<PatientList patients={patients} />} />
          <Route path='/newpatient' element={<NewPatient newPatient={newPatient} addPatient={addPatient} handleChange={handleChange} />} />
          <Route path='/medicationslist' element={<MedicationList />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

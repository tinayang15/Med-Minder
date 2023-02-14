import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import PatientList from './components/PatientList'
// import Nav from './components/Nav'
import Header from './components/Header'
import NewPatient from './components/NewPatient';
import MedicationList from './components/MedicationList'
import NewMedication from './components/NewMedication'
import UpdateMedication from './components/UpdateMedication';

import axios from 'axios'

function App() {

  // const handleClick = async (e) => {
  //   console.log('button is clicked')
  //   e.preventDefault()
  //   const response = await axios.get('http://localhost:3001/home/patients')
  //   console.log(response)
  // }

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
          <Route path='/' element={<PatientList />} />
          <Route path='/newpatient' element={<NewPatient />} />
          <Route path='/medicationslist/:patientId' element={<MedicationList />} />
          <Route path='/medicationslist/:patientId/newmedication' element={<NewMedication />} />
          <Route path='/medicationslist/:patientId/update/:medication' element={<UpdateMedication />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;

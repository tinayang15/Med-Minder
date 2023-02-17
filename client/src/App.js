import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import PatientList from './components/PatientList'
import Header from './components/Header'
import NewPatient from './components/NewPatient';
import MedicationList from './components/MedicationList'
import NewMedication from './components/NewMedication'
import UpdateMedication from './components/UpdateMedication';
import axios from 'axios'

function App() {

  return (

    <div className="App">
      <Header title='Med Minder' />
      <main className='RoutesApp'>
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

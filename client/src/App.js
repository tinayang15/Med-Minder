import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import PatientList from './components/PatientList'
// import Nav from './components/Nav'
import Header from './components/Header'

function App() {

  const [patients, setPatients] = useState([
    {
      name: 'Jane Doe',
      id: 12345
    },
    {
      name: 'John Doe',
      id: 12345
    },
  ])


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
        </Routes>
      </main>
    </div>
  );
}

export default App;

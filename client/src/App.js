
import './App.css';
import PatientList from './components/PatientList'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Header from './components/Header'

function App() {
  return (
    // nav bar for home (PatientList) - medication list if I have time
    // add search bar
    <div className="App">
      <Header title='Med Minder' />
      <PatientList />
    </div>
  );
}

export default App;

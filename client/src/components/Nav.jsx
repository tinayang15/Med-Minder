import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar'>
            {/* <h4>Patients List</h4> */}
            <div className='navPatientsList'>
                <NavLink to='/' className='navPatients'>Patients List</NavLink>
            </div>
            <div className='navAddPatient'>
                <NavLink to='/newpatient' className='navAdd'>Add Patient</NavLink>
            </div>
        </nav>

    )
}
export default Nav
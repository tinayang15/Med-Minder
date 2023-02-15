import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar'>
            {/* <h4>Patients List</h4> */}
            <div>
                <NavLink to='/'>Patients List</NavLink>
            </div>
            <div>
                <NavLink to='/about'>About</NavLink>
            </div>
        </nav>

    )
}
export default Nav
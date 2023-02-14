import Nav from './Nav'
const Header = ({ title }) => {
    return (
        <header className='Header'>
            <h1>{title}</h1>
            <Nav />
        </header>
    )
}
export default Header
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Link to='/'>Goal Setter</Link>
            </div>
            <ul>
                <li to='/login'>
                    <FaSignInAlt />Login
                </li>
                <li to='/register'>
                    <FaUser />Register
                </li>
            </ul>
        </header>
    )
}

export default Header
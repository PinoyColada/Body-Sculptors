import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav class = "navbar-style">
            <div> LOGO </div>
            <ul>
                <li><Link to='/' className='navWord first'>Main Page</Link></li>
                <li><Link to='/createUser' className='navWord'>Create a workout</Link></li>
                <li><Link to='/users' className='navWord'>View workout history</Link></li>
            </ul>
        </nav>
    )
}

export default Header
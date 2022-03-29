import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav class="navbar-style">
            <div>
                <Link to='/' className='navWord first'>
                    <img className="logo"src="https://i.ibb.co/mtTVYYz/Screen-Shot-2022-03-29-at-6-02-33-PM.png" alt="Body-Sculptors Logo"/>
                </Link>
            </div>
            <ul className="navbar-ulist-style">
                <li className="navbar-list-style"><Link to='/createUser' className='navWord'>Create a workout</Link></li>
                <li className="navbar-list-style"><Link to='/users' className='navWord'>View workout history</Link></li>
                <li className="navbar-list-style"><Link to='/aboutMe' className='navWord first'>About me</Link></li>
            </ul>
        </nav>
    )
}

export default Header
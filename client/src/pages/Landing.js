import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Landing = () => {

    return (
        <div className='landing'>
            <Navbar />
            <h1>Body Sculptors</h1>
            <Link to ='/createUser'>Create a User</Link>
        </div>
    )

}

export default Landing
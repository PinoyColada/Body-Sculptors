import { Link } from 'react-router-dom'

const Landing = () => {

    return (
        <div className='landing'>
            <h1>Body Sculptors</h1>
            <Link to ='/createUser'>Create a User</Link>
        </div>
    )

}

export default Landing
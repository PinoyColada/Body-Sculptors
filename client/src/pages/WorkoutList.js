import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import Users from '../components/Users'
import axios from 'axios'

const WorkoutList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const makeApiCall = async () => {
            let res = await axios.get('http://localhost:3001/workoutList')
            setUsers(res.data.users)
        }
        makeApiCall()
    }, [])

    return (
        <div className='workoutList'>
            <Navbar />
            <section>
                <h1 className='rec'>Users</h1>
                <div className='reviewContainer'>
                    {users.map((user) => (
                        <Users
                            key={user._id}
                            id={user._id}
                            username={user.name}
                            age={user.age}
                            bodyWeight={user.bodyWeight}
                            {...user}
                        />
                    ))}
                </div>
            </section>


        </div>
    )

}

export default WorkoutList
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import Users from '../components/Users'
import axios from 'axios'

const WorkoutList = () => {
    const [users, setUsers] = useState([])
    // const [workouts, setWorkouts] = useState([])

    useEffect(() => {
        const makeApiCall = async () => {
            let res = await axios.get('http://localhost:3001/workoutList')
            setUsers(res.data.users)

            // let res2 = await axios.get('http://localhost:3001/workoutList/:id/workouts')
            // setWorkouts(res2.data.workouts)
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
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import WorkoutForm from '../components/WorkoutForm'
import axios from 'axios'

const WorkoutCreation = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const makeApiCall = async () => {
            let res = await axios.get('https://agile-journey-75895.herokuapp.com/workoutCreation')
            setUsers(res.data.users)
        }
        makeApiCall()
    }, [])



    return (
        <div className='workoutCreation'>
            <Navbar />
            <section>
                {users.map((user, i, array) => (
                    i === array.length - 1 ?
                        <WorkoutForm
                            key={user._id}
                            id={user._id}
                            name={user.name}
                            {...user}
                        />
                        : console.log("going to last value")
                ))}

            </section>
        </div>
    )

}

export default WorkoutCreation

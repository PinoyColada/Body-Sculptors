import axios from 'axios';
import { useState } from 'react'
// import { Link } from 'react-router-dom';



const WorkoutForm = (props) => {
    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState(0);
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(false);
    // const [user, setUser] = useState('')

    const handleChange = (event) => {
        const target = event.target.value;
        setExercise(target);
    }

    const handleChange2 = (event) => {
        const target = event.target.value;
        setWeight(target);
    }

    const handleChange3 = (event) => {
        const target = event.target.value;
        setSets(target);
    }

    const handleChange4 = (event) => {
        const target = event.target.value;
        setReps(target);
    }

    // const getInfo = async () => {
    //     await axios({
    //         url: "http://localhost:3001/workoutCreation",
    //         method: 'get'
    //     }).then(response => {
    //         console.log(response)
    //     })
    // }

    const handleSubmit = async (e) => {
        await axios({
            url: "http://localhost:3001/workoutCreation",
            method: 'post',
            data: {
                exercise: exercise,
                weight: weight,
                sets: sets,
                reps: reps,
                user_id: props._id
            }
        })
    }


    // useEffect(() => {
    //     const makeApiCall = async () => {
    //         let res = await axios.get('http://localhost:3001/workoutCreation')
    //         setUser(res.data.users)
    //     }
    //     makeApiCall();
    // }, [])

    return (
        <div>
            <h1>
            {/* {user.map((user, i, array) => (
                    i === array.length -1 ?
                    <h1>{user.name}</h1>
                    : console.log("going to last value")
                ))} */}
            {props._id}
            </h1>
            <div className="user-form-wrapper">
                <form className="user-form-layout" onSubmit={(e) => [handleSubmit(e)]}>
                    <div>
                        <img className='user-form-logo' src="https://i.ibb.co/mtTVYYz/Screen-Shot-2022-03-29-at-6-02-33-PM.png" alt="Body-Sculptors Logo" />
                        <h1 className='user-form-instruction'>Record a workout</h1>
                    </div>
                    <div className="user-form-layout-group">
                        <label className="user-form-layout-label" htmlFor="exercise"></label>
                        <input className="user-form-layout-input" placeholder="Enter your exercise" type="text" name="Exercise" onChange={handleChange} />
                    </div>
                    <div className="user-form-layout-group">
                        <label className="user-form-layout-label" htmlFor="weight"></label>
                        <input className="user-form-layout-input" placeholder="Enter the amount of weight you used" type="number" name="Weight" onChange={handleChange2} />
                    </div>
                    <div className="user-form-layout-group">
                        <label className="user-form-layout-label" htmlFor="sets"></label>
                        <input className="user-form-layout-input" placeholder="Enter the amount of sets you did" type="number" name="Sets" onChange={handleChange3} />
                    </div>
                    <div className="user-form-layout-group">
                        <label className="user-form-layout-label" htmlFor="reps"></label>
                        <input className="user-form-layout-input" placeholder="Enter the amount of reps you did" type="number" name="Reps" onChange={handleChange4} />
                    </div>
                    <div className='user-form-layout-group'>
                        <button className='user-form-layout-button'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

/* 
    return (
        <div className='workoutList'>
            <Navbar />
            <section>
                <h1 className='rec'>Users</h1>
                <div className='reviewContainer'>
                {users.map((user, i, array) => (
                    i === array.length -1 ?
                    <Users
                        key={user._id}
                        id={user._id}
                        username={user.name}
                        age={user.age}
                        bodyWeight={user.bodyWeight}
                        {...user}
                    />
                    : console.log("going to last value")
                ))}
                </div>
            </section>
            
            
        </div>
    )

*/

export default WorkoutForm;
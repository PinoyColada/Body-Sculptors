import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios'
import Workouts from '../components/Workouts'

const Users = (props) => {
    const [name, setNewName] = useState('')
    const [age, setNewAge] = useState(0)
    const [bodyWeight, setNewBodyWeight] = useState(0)
    const [addEditUser, setAddEditUser] = useState(false)
    const [detect, setDetect] = useState(false);

    const deleteHandler = async () => {
        await axios.delete(`/workoutList/${props.id}`)
        window.location.reload();
    }

    const handleName = (e) => {
        setNewName(e.target.value)
    }

    const handleAge = (e) => {
        setNewAge(e.target.value)
    }

    const handleBodyWeight = (e) => {
        setNewBodyWeight(e.target.value)
    }

    const updateUserInfo = async () => {
        await axios.put(`http://localhost:3001/workoutList/${props._id}`, {
            name: name,
            age: age,
            bodyWeight: bodyWeight
        })
        .then(function (response) {
            setAddEditUser(true);
            console.log(response)
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error)
        })

    }

    useEffect(() => {
        return () => {
            setAddEditUser(false)
        }
    }, [addEditUser])

    if (`${props.id}` === `${props.user_id}`) {
        return (
            <div className="userContainer">
                <section className="invoice">
                    <table>
                        <thead>
                            <tr>
                                <th>Exercise</th>
                                <th>Weight</th>
                                <th>Sets</th>
                                <th>Reps</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.exercise}</td>
                                <td>{props.weight}</td>
                                <td>{props.sets}</td>
                                <td>{props.reps}</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        )

    } else if (`${props.id}` !== `${props.user_id}` && setDetect === false) {
        return (
            <h1></h1>
        )

    } else {
        return (
            <div className="userContainer">
                <section className="invoice">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Weight</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.username}</td>
                                <td>{props.age}</td>
                                <td>{props.bodyWeight}</td>
                                <td>
                                    <div>
                                        <input
                                            type='text'
                                            name='name'
                                            required='required'
                                            placeholder="Enter new name"
                                            onChange={(e) => handleName(e)}
                                        />
                                        <input
                                            type='Number'
                                            name='age'
                                            required='required'
                                            placeholder="Enter new age"
                                            onChange={(e) => handleAge(e)}
                                        />
                                        <input
                                            type='Number'
                                            name='bodyWeight'
                                            required='required'
                                            placeholder="Enter new body weight"
                                            onChange={(e) => handleBodyWeight(e)}
                                        />
                                        <button className="submit-button" type='submit' onClick={() => updateUserInfo()}>Edit User</button>
                                    </div>
                                </td>
                                <td><button onClick={deleteHandler}>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}

export default Users
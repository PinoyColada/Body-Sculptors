import { useState, useEffect } from 'react'
import axios from 'axios'

const Users = (props) => {
    const [name, setNewName] = useState('')
    const [age, setNewAge] = useState(0)
    const [bodyWeight, setNewBodyWeight] = useState(0)
    const [addEditUser, setAddEditUser] = useState(false)

    const deleteHandler = async () => {
        await axios.delete(`https://agile-journey-75895.herokuapp.com/workoutList/${props.id}`)
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
        await axios.put(`https://agile-journey-75895.herokuapp.com/workoutList/${props._id}`, {
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
                                    <button className="submit-button" type='submit' onClick={() => updateUserInfo()}>Update User</button>
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

export default Users
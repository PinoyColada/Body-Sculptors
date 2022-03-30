import axios from 'axios'
import { useState } from 'react'

const UserForm = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [bodyWeight, setBodyWeight] = useState(0)

    const handleChange = (event) => {
        const target = event.target.value;
        setName(target);
    }

    const handleChange2 = (event) => {
        const target = event.target.value;
        setAge(target);
    }

    const handleChange3 = (event) => {
        const target = event.target.value;
        setBodyWeight(target)
    }

    function handleSubmit(e) {
        console.log("submitted")
        axios({
            url: "http://localhost:3001/userCreation",
            method: 'post',
            data: {
                username: name,
                description: age,
                rating: bodyWeight
            }
        })
    }


    return (
        <form class="form-layout" onSubmit={(e) => handleSubmit(e)}>
            <h1>Gym Form</h1>
            <ul>
                <li>
                    <label for="name">Name</label>
                    <input type="text" name="Name" onChange={handleChange}/>
                        <span>Enter your username</span>
                </li>
                <li>
                    <label for="age">Age</label>
                    <input type="number" name="Age" onChange={handleChange2}/>
                        <span>Enter your age</span>
                </li>
                <li>
                    <label for="rating">Body Weight</label>
                    <input type="number" name="Body Weight" onChange={handleChange3}/>
                    <span>Enter your body weight</span>
                </li>
                <li>
                    <button className='form-layout-button'>Submit</button>
                </li>
            </ul>
        </form>
    )
}

export default UserForm
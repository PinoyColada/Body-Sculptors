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
        <div>
            <div class="user-form-wrapper">
                <form class="user-form-layout" onSubmit={(e) => handleSubmit(e)}>
                    <div class="user-form-layout-group">
                        <label class="user-form-layout-label" for="name"></label>
                        <input class="user-form-layout-input" placeholder="Enter your name" type="text" name="Name" onChange={handleChange} />
                    </div>
                    <div class="user-form-layout-group">
                        <label class="user-form-layout-label" for="age"></label>
                        <input class="user-form-layout-input" placeholder="Enter your age" type="number" name="Age" onChange={handleChange2} />
                    </div>
                    <div class="user-form-layout-group">
                        <label class="user-form-layout-label" for="body-weight"></label>
                        <input class="user-form-layout-input" placeholder= "Enter your body weight" type="number" name="Body Weight" onChange={handleChange3} />
                    </div>
                    <div>
                        <button className='user-form-layout-button'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserForm
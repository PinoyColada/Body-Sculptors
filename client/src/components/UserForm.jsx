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
        axios({
            url: "http://localhost:3001/userCreation",
            method: 'post',
            data: {
                name: name,
                age: age,
                bodyWeight: bodyWeight
            }
        })
    }


    return (
        <div>
            <div className="user-form-wrapper">
                <form className="user-form-layout" onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <img className='user-form-logo' src="https://i.ibb.co/mtTVYYz/Screen-Shot-2022-03-29-at-6-02-33-PM.png" alt="Body-Sculptors Logo" />
                        <h1 className='user-form-instruction'>Please enter information about yourself before recording a workout</h1>
                    </div>
                    <div className="user-form-layout-group">
                        <label className="user-form-layout-label" htmlFor="name"></label>
                        <input className="user-form-layout-input" placeholder="Enter your name" type="text" name="Name" onChange={handleChange} />
                    </div>
                    <div className="user-form-layout-group">
                        <label className="user-form-layout-label" htmlFor="age"></label>
                        <input className="user-form-layout-input" placeholder="Enter your age" type="number" name="Age" onChange={handleChange2} />
                    </div>
                    <div className="user-form-layout-group">
                        <label className="user-form-layout-label" htmlFor="body-weight"></label>
                        <input className="user-form-layout-input" placeholder="Enter your body weight" type="number" name="Body Weight" onChange={handleChange3} />
                    </div>
                    <div className='user-form-layout-group'>
                        <button className='user-form-layout-button'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserForm
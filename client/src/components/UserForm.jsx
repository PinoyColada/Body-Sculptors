import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const UserForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [bodyWeight, setBodyWeight] = useState(0);
    const [info, updateInfo] = useState(false);

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
        setBodyWeight(target);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios({
            url: "https://agile-journey-75895.herokuapp.com/userCreations",
            method: 'post',
            data: {
                name: name,
                age: age,
                bodyWeight: bodyWeight
            }
        })
        updateInfo(true);
    }

    if (info === true) {
        return (<div className='workoutCreation'>
            <h1> Hello {name}, please press to button to continue </h1>
            <button><Link to='/workoutCreation' className='navWord'>Create workout</Link></button>
            
        </div>)
    } else {
        return (
            <div>
                <div className="user-form-wrapper">
                    <form className="user-form-layout" onSubmit={(e) => [handleSubmit(e)]}>
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
}

export default UserForm
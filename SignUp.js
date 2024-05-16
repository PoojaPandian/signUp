//importing files/modules
import React from "react";
import './SignUp.css'
import { useState } from "react";
import axios from 'axios';

//main functional comp
const SignUp= ()=>{
    //initializing values
    const [values, setValues] = useState({ Name: '', Email: '', Password: '', conPassword: '' });

    const handleInputChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
        // Updating state with the new input values
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Password:", values.Password);
        console.log("Confirm Password:", values.conPassword);
        if (values.Password !== values.conPassword) {
        alert('Passwords do not match.');
        } else {
        const payload = {
                Name: values.Name,
                Email: values.Email,
                Password: values.Password,
                conPassword: values.conPassword
        };

        //making a request to server with data using axios
        axios.post('http://localhost:8081/myapp', payload)
        .then(res=> console.log("Registered Successfully!"))
        .catch(err=> console.log(err));
        }
    }


    return(
        <div id="signup_div">
            <div id='signup_cont'>
                <h4>SignUp</h4>
                <form onSubmit={handleSubmit}>
                <div>
                <input type="text" name='Name' placeholder="username" value={values.Name} onChange={handleInputChange}/>
                </div>
                <div>
                <input type="email" name='Email' placeholder="email" value={values.Email} onChange={handleInputChange}/>
                </div>
                <div>
                <input type="password" name='Password' placeholder="password" value={values.Password} onChange={handleInputChange}/>
                </div>
                <div>
                <input type="password" name='conPassword' placeholder="confirm password" value={values.conPassword} onChange={handleInputChange}/>
                </div>
                <br/>
                <div><button type='submit'>Submit</button></div>
                </form>
            </div>
        </div>
    )
}
export default SignUp;
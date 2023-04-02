import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css';

const Signup = () => {

    const navigate = useNavigate();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [confirmpassword, setconfirmpassword] = useState('');

    const handleemail = e => {
        setemail(e.target.value);
    }

    const handlepassword = e => {
        setpassword(e.target.value);
    }

    const handlesetconfirmpassword = e => {
        setconfirmpassword(e.target.value);
    }


    const handlesubmit1 = e => {
        e.preventDefault();
        if (email === "" || password === "" || confirmpassword === "") {
            alert("please fillout the empty filelds..");
            return false;
        }

        if (password !== confirmpassword) {
            alert("password and confirmpassword must be same,try again.");
            setpassword('');
            setconfirmpassword('');
            return false;
        }

        alert("successfully registered.");
        setemail('');
        setpassword('');
        setconfirmpassword('');
        // navigate("/Login");

        fetch("http://localhost:3000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "content-type": "application/json",
                "Accept": "application/json",
                "Access-control-Allow-origin": "*",
            },
            body: JSON.stringify({
                email,
                password
            }),


        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userregister");
            })
        navigate("/Login");

    }




    return (
        <form onSubmit={handlesubmit1} id="a">
            <h2>Register</h2>
            <label>
                Email<br></br>
                <input type="text" value={email} id="input-1" onChange={handleemail} />
            </label>
            <br></br>
            <label className='signup1'>
                password<br></br>
                <input type="password" value={password} id="input-1" onChange={handlepassword} />
            </label>
            <br></br>
            <label className='signup'>
                confirmpassword<br></br>
                <input type="password" value={confirmpassword} id="input-1" onChange={handlesetconfirmpassword} />
            </label>
            <br></br>
            <br></br>
            <button className='btn1'>Register</button>


        </form>
    )
}

export default Signup;
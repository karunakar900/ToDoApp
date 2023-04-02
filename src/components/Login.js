import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';
const Login = () => {
    const navigate = useNavigate();

    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');



    const handleemail = e => {
        setemail(e.target.value);
    }

    const handlepassword = e => {
        setpassword(e.target.value);
    }

    const handlesubmit = e => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("please enter your credentials..");
            return false;
        }
        alert("login success");
        setemail('');
        setpassword('');
        // navigate("/Todo");

        fetch("http://localhost:3000/login", {
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
        navigate("/Todo");

    }



    return (
        <form>
            <h1>User-Login</h1>
            <label>
                Email:<br></br>
                <input type="text" value={email} onChange={handleemail} />
            </label>
            <br></br>
            <label>
                Password:<br></br>
                <input type="password" value={password} onChange={handlepassword} />
            </label>
            <br></br>
            <br></br>
            <button onClick={handlesubmit} >Login</button>
            <Link to="/register">newuser</Link>


        </form>

    )
}

export default Login;

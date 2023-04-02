import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';


const Todo = () => {
    const navigate = useNavigate();

    const [todos, settodo] = useState([]);
    const [input, setinput] = useState('');


    const handleinputchange = (e) => {
        setinput(e.target.value);
    }





    const handletodo = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            settodo([...todos, { text: input, completed: false }]);
            setinput('');
        }
    };

    const handlelogout = e => {
        e.preventDefault();
        navigate("/Login");

    }


    return (
        <div>
            <div>
                <h3>My-To-Do-List</h3>
                <input type="text" id="todo" placeholder='Enter Your Task' onChange={handleinputchange} />
                <button id="btn2" onClick={handletodo}>Add</button>
                <button onClick={handlelogout} id="x">Logout</button>
            </div>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index} id="print">{todo.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;
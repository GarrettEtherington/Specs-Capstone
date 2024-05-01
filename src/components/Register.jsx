import { useState, useContext } from "react";
import axios from "axios";

const Register = () => {
    const [username, setUsername]= useState ("")
    const [password, setPassword]= useState ("")
    const [register, setRegister]= useState(true)

    const submitHandler = (e) => {
        e.preventDefault()
        let body = { username, password }
        axios
        // .post(register ? '/register' : )
    }

    return (
        <main>
            <h1>konnichiwa</h1>
            <form>
                <input placeholder="enter username"/>
                <input placeholder="enter password"/>
                <button>sign up uwu</button>
            </form>
        </main>
    )
}

export default Register
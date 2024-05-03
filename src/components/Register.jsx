import { useState } from "react";
import axios from "axios";

const Register = () => {

    const submitHandler = (e) => {
        e.preventDefault()
        let body = { username, password }
        axios
        .post("/register", body)
        .then((res) = {
            
        })
        .catch((err) => {
            console.log(err)
        })
        console.log(`submit handled`)
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
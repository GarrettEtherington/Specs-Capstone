import { useState } from "react";
import axios from "axios";
import styles from "./LogReg.module.css"
import { useNavigate } from "react-router";

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const updateUsername = (e) => {
        setUsername(e.target.value)
        console.log(e.target.value)
    }
    
    const updatePassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        let body = { username, password }
        console.log(body)
        await axios
        .post("http://localhost:4546/register", body)
        .then((res) => {
            navigate("/")
        })
        .catch((err) => {
            console.log(err)
        })
        console.log(`submit handled`)
    }

    return (
        <main className={styles.mane}>
            <h1 className={styles.hewwow}>Sign Up</h1>
            <form onSubmit={submitHandler}>
                <input placeholder="choose username" className={styles.userN} onChange={updateUsername} type="text" value={username}/>
                <input placeholder="choose password" className={styles.passW} onChange={updatePassword} type="text" value={password}/>
                <button className={styles.thisButtonSucks}>Register</button>
            </form>
        </main>
    )
}

export default Register
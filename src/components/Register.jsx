import { useState } from "react";
import axios from "axios";
import styles from "./LogReg.module.css"

const Register = () => {

    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     let body = { username, password }
    //     axios
    //     .post("/register", body)
    //     .then((res) = {
            
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //     })
    //     console.log(`submit handled`)
    // }

    return (
        <main className={styles.mane}>
            <h1 className={styles.hewwow}>Sign Up</h1>
            <form>
                <input placeholder="choose username" className={styles.userN}/>
                <input placeholder="choose password" className={styles.passW}/>
                <button className={styles.thisButtonSucks}>log in</button>
            </form>
        </main>
    )
}

export default Register
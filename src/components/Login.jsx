import { useState, useContext } from "react";
import axios from "axios";
import styles from "./LogReg.module.css"

const Login = () => {
    
    
    return (
        <main className={styles.mane}>
            <h1 className={styles.hi}>Welcome Back</h1>
            <form>
                <input placeholder="enter username" className={styles.userN}/>
                <input placeholder="enter password" className={styles.passW}/>
                <button className={styles.thisButtonSucks}>log in</button>
            </form>
        </main>
    )
}

export default Login
import React from "react";
import { useState } from "react";
import {NavLink} from "react-router-dom"
import styles from "./Header.module.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const updateSearch = (e) => {
        // handles changes in searchbar, updates state
        setSearch(e.target.value)
        console.log(e.target.value)

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // looks at search, sends back data and navigates to new page
        await axios.post(
            "http://localhost:4546/search", {bodee: search}
        ) .then (
            (res) => {
                if (search === res.data.heroname) {
                    navigate("/HeroPage", { state: res.data})
                    console.log(res)    
                } else {
                    alert (`No Hero With Matching Name`)
                }

            }
        )

    }


    return (
        <header>
            <nav>
                <ul className={styles.liyst}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='register'>Sign Up For Free</NavLink>
                    </li>
                </ul>
            </nav>
            <form onSubmit={handleSubmit}>
                <input className={styles.sinput} type="text" placeholder="search..." onChange={updateSearch} value={search}/>
            </form>
        </header>
    )
}

export default Header

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

    const handleSubmit = (e) => {
        e.preventDefault()
        // looks at search, sends back data and navigates to new page
        axios.get(
            "http://locahost:4545/search", {bodee: search}
        ) .then (
            (res) => {
                navigate("/SearchResults", { state: res.data})
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
                <input className={styles.sinput} type="text" placeholder="search..." onChange={updateSearch}/>
            </form>
        </header>
    )
}

export default Header

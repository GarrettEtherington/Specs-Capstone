import React from "react";
import {NavLink} from "react-router-dom"
import styles from "./Header.module.css"


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='register'>Sign Up For Free</NavLink>
                    </li>
                </ul>
            </nav>
            <input className={styles.heroSearch} type="text" placeholder="Search for a hero" />
        </header>
    )
}

export default Header

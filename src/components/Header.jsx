import React from "react";
import {NavLink} from "react-router-dom"


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
            <input type="text" placeholder="Search..."/>
        </header>
    )
}

export default Header

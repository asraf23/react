import React from "react";
import './Header.css';

const Header=()=>{
    return(
        <header className="header">
            <div>React</div>
            <div className="headerul">
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Logout</li>
                </ul>
            </div>
        </header>
    )

}
export default Header;
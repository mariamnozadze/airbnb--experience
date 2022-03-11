import React from "react";
import airbnb from "./airbnb.png";

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} 
            className="nav-logo"
            alt=""></img>
        </nav>
    )
}
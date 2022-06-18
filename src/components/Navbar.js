import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img src={require("../images/worldIcon.png")} alt="world icon" />
            <h4 className="nav--header">my travel journal.</h4>
        </nav>
    )
}
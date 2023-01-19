import React from "react";
import "./customCSS/custom.css"

function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light justify-content-center navbar-color" href="#/">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="/">&lt;Home&gt;</a></li>
                <li className="nav-item"><a className="nav-link" href="/about">&lt;About&gt;</a></li>
                <li className="nav-item"><a className="nav-link" href="/skills">&lt;Skills&gt;</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact">&lt;Contact Me&gt;</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
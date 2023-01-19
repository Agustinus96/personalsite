import React from "react";
import profilePics from "./images/agustinus.png"
import fade from "./effect/effect";

fade();

function Intro() {
    return (
        <div className="intro hidden">
            <div>
                <h1>HI! WELCOME TO MY WEBSITE!</h1>
                <h3>I am Agustinus</h3>
                <p>I am an aspiring web developer and business consultant.<br />
                    I am currently working at a Japanese Company, managing the relationship
                    between international subsidiaries and parent company.</p>
            </div>
            <div>
                <img src={profilePics} alt="Agustinus's profile picture" />
            </div>
        </div>
    )
}

export default Intro;
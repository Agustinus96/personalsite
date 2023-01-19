import React from "react";
import "./customCSS/custom.css"

function Skills () {
    return (
        <div className="skill">
            <h1>My Skills</h1>
                <table>
                    <thead>
                    <tr>
                        <th className="white-text">Language</th>
                        <th className="white-text">Proficiency</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="white-text">English</td>
                        <td className="white-text">Business Level</td>
                    </tr>
                    <tr>
                        <td className="white-text">Japanese</td>
                        <td className="white-text">Fluent, JLPT N1</td>
                    </tr>
                    <tr>
                        <td className="white-text">Indonesian</td>
                        <td className="white-text">Native</td>
                    </tr>
                    <tr>
                        <td className="white-text">Malay</td>
                        <td className="white-text">Intermediate</td>
                    </tr>
                    </tbody>
                </table>
        </div>
    )
}

export default Skills;
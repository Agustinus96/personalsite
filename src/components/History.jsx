import React from "react";
import effect from "../components/effect/effect"



function History() {
    effect();
    return (
        <div className="grey-blur hidden">
            <h1 className="journey">My journey so far...</h1>
            <div className="history-content">
                <div className="history-left">
                    <div>
                        <h3>2014</h3>
                        <p className="content font-monospace text-end">Graduated from St. Joseph Institution International
                            Finished IB Diploma Program under 100% scholarship</p>
                    </div>
                    <div className="left-2">
                        <h3>2019</h3>
                        <p className="content font-monospace text-end">Graduated from Nagoya University
                            Bachelor of Arts
                            Full Scholarship from the Ministry of Education of Japan</p>
                    </div>
                </div>
                <div className="timeline"></div>
                <div className="history-right">
                    <div className="right-1">
                        <h3>2017-2019</h3>
                        <p className="content font-monospace text-start">Part time position as a Daycare Assistant
                            at an International Kinder garden in Japan</p>
                    </div>
                    <div className="right-2">
                        <h3>2019-Present</h3>
                        <p className="content font-monospace text-start" >A Corporate Strategist at Shinmei Industry Co. Ltd
                            Working closely with both parent and child companies
                            at international level improving their synergy and performance.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History;
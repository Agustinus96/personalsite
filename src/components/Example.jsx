
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import History from "./History";
import styled, { keyframes } from "styled-components";
import { fadeInDown } from "react-animations";

const FadeInDownDiv = styled.div`animation: infinite 5s ${keyframes`${fadeInDown}`}`;

function Example({ nextRef }) {
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                //trigger animation when nextRef is visible on screen
            }
        });
        observer.observe(nextRef.current);
    }, [nextRef]);

    return (
        <div>
            <Navbar/>
      <header className="App-header">
      </header>
            <Intro />
            <FadeInDownDiv>
            <History />
            </FadeInDownDiv>
            <div ref={nextRef}>
                <History />
            </div>
        </div>
    )

}

export default Example;
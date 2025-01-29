import { useEffect } from "react"; 
import gsap from "gsap"; 
// import ScrollTrigger from "gsap/ScrollTrigger"; 
import "./Home.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    // effect for the AYMANE
    useEffect(() => {
        gsap.to("#first-name", {
            scrollTrigger: {
                trigger: "#first-name",
                start: "top top",
                end: "bottom",
                // markers: true,
                scrub: 1,
                toggleActions: "play reverse play reverse"
            },
            x: 200,
            duration: 3
        });
    }, []);
    // effect for the KHADRAOUI
    useEffect(() => {
        gsap.to("#last-name", {
            scrollTrigger: {
                trigger: "#last-name",
                start: "top top",
                end: "bottom",
                // markers: true,
                scrub: 1,
                toggleActions: "play reverse play reverse"
            },
            x: -200,
            duration: 3
        });
    }, []);
    // effect for the DEVLOPER DESIGHNER
    useEffect(() => {
        gsap.to("#devl", {
            scrollTrigger: {
                trigger: "#devl",
                start: "top top",
                end: "bottom",
                // markers: true,
                scrub: 1,
                toggleActions: "play reverse play reverse"
            },
            x: -200,
            duration: 3
        });
    }, []);

    return (
        <>
            <div className="colume"> 
                <div className='first-lighn'>
                    <h1 id="first-name">AYMANE✧</h1>
                    <h4>Transforming ideas into vibrant <br/> realities, one pixel at a time</h4>
                </div>
                <div className='first-lighn'>
                    <h4>Crafting the Digital Canvas - Where Design <br/> Meets Development.</h4>
                    <h1 id="last-name">☘︎ KHADRAOUI</h1>
                </div>
            </div>
            <div className='desc'> 
                <h2 id="devl">⨠DEVLOPER</h2>
                <h1>❋DESIGNER</h1>
            </div>
        </>
    );
}

export default Home
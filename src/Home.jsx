import { useEffect } from "react"; 
import gsap from "gsap"; 
// import ScrollTrigger from "gsap/ScrollTrigger"; 
import "./styles/Home.css";

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

    useEffect(() => {
        const element = document.querySelector("#deteals");
        const chars = "...............................................................................";
        
        function scramble() {
            // Get the original text and split it into lines
            const originalHTML = element.innerHTML;
            const textLines = originalHTML.split('<br />');
            let counters = textLines.map(() => 0);
            
            gsap.to({}, {
                duration: 2,
                onUpdate: () => {
                    const scrambledLines = textLines.map((line, lineIndex) => {
                        return line
                            .split("")
                            .map((char, i) => {
                                if (i < counters[lineIndex]) return line[i];
                                return chars[Math.floor(Math.random() * chars.length)];
                            })
                            .join("");
                    });
                    
                    element.innerHTML = scrambledLines.join('<br />');
                    counters = counters.map(c => c + 1);
                }
            });
        }

        ScrollTrigger.create({
            trigger: "#deteals",
            start: "top bottom",
            onEnter: scramble,
            onEnterBack: scramble,
            // markers: true // Helps you see the trigger points, remove in production
        });
    }, []);


    useEffect(() => {
        const element = document.querySelector("#deteal");
        const chars = "...............................................................................";
        
        function scramble() {
            // Get the original text and split it into lines
            const originalHTML = element.innerHTML;
            const textLines = originalHTML.split('<br />');
            let counters = textLines.map(() => 0);
            
            gsap.to({}, {
                duration: 4,
                onUpdate: () => {
                    const scrambledLines = textLines.map((line, lineIndex) => {
                        return line
                            .split("")
                            .map((char, i) => {
                                if (i < counters[lineIndex]) return line[i];
                                return chars[Math.floor(Math.random() * chars.length)];
                            })
                            .join("");
                    });
                    
                    element.innerHTML = scrambledLines.join('<br />');
                    counters = counters.map(c => c + 1);
                }
            });
        }

        ScrollTrigger.create({
            trigger: "#deteal",
            start: "top bottom",
            onEnter: scramble,
            onEnterBack: scramble,
            // markers: true // Helps you see the trigger points, remove in production
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
        gsap.to(".desc", {
            scrollTrigger: {
                trigger: ".desc",
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
            <div className="colume" id="homee"> 
                <div className='first-lighn'>
                    <h1 id="first-name">AYMANE✧</h1>
                    <h4 id="deteals">Transforming ideas into vibrant <br/> realities, one pixel at a time</h4>
                </div>
                <div className='first-lighn'>
                    <h4 id="deteal">Crafting the Digital Canvas - Where Design <br/> Meets Development.</h4>
                    <h1 id="last-name">☘︎ KHADRAOUI</h1>
                </div>
            </div>
            <div className='desc'> 
                <h2 id="devl">⨠DEVLOPER</h2>
                <h1 id="devl">❋DESIGNER</h1>
            </div>
        </>
    );
}

export default Home
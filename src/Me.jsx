import './styles/Me.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Me() {
    useEffect(() => {
        const element = document.querySelector("#UI");
        const chars = "................................................................................";
        
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
                    counters = counters.map(c => c + 0.5);
                }
            });
        }

        ScrollTrigger.create({
            trigger: ".UI",
            start: "top bottom",
            onEnter: scramble,
            onEnterBack: scramble,
            // markers: true // Helps you see the trigger points, remove in production
        });
    }, []);

    return(
        <>
            <h1 id='me'>ME●</h1>
                <div className='that_Me'>
                    <h5 id='how_iam'>Specializing in Full-Stack <br />Development, I combine UI/UX <br />Design with <br />server-side scripting and database <br />expertise.</h5>
                    <h5 id='how_iam'>I'm AYMANE, 20 years old <br /> Web Devloper. <br />and I'am from morocco ♥. </h5>
                </div>
                <div className='UI'>
                    <h5>Full-Stack Development </h5>
                    <h5>UI/UX design</h5>
                    {/* <h5>Digital branding</h5> */}
                </div>
        </>
    )
}

export default Me
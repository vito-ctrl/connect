import './styles/Me.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Me() {
    const colomeRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const element = colomeRef.current;
        const chars = '....';
        
        function scramble() {
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
                    counters = counters.map(c => c + 2);
                }
            });
        }

        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            onEnter: scramble,
            onEnterBack: scramble,
            // markers: true
        });
    }, []);

    const howIamRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const element = howIamRef.current;
        const chars = '....';
        
        function scramble() {
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
                    counters = counters.map(c => c + 2);
                }
            });
        }

        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            onEnter: scramble,
            onEnterBack: scramble,
        });
    }, []);


    return(
        <div className='that_Me' id='moi'>
            <h1 id='me'>ME●</h1>
            <div ref={colomeRef} className='colome'>
                <h5>Specializing in Full-Stack </h5>
                <h5>Development, I combine UI/UX </h5>
                <h5>Design with server-side scripting and database</h5>
            </div>
            <div ref={howIamRef} className='how_iam'>
               <h5> I'm AYMANE, 20 years old </h5>
                <h5>Web Devloper. </h5>
                <h5>and I'am from morocco ♥. </h5>
            </div>
        </div>
    )
}

export default Me;
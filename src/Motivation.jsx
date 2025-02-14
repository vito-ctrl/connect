import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styles/Motivation.css'

function Motivation (){

    const sectionRef = useRef(null);
  
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      
      // Split text into spans
      const textElement = sectionRef.current.querySelector('.full-stack');
      const text = textElement.textContent;
      textElement.textContent = ''; // Clear original text
      
      // Create spans for each character
      const chars = text.split('').map(char => {
        const span = document.createElement('span');
        span.textContent = char;
        textElement.appendChild(span);
        return span;
      });
      
      // Animate each character
      gsap.to(chars, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "center center",
          scrub: 1,
          // markers: true,
        },
        color: "black",
        stagger: {
          each: 0.02,
          from: "start"
        }
      });
    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, []);

    return(
        <>
            <section 
                ref={sectionRef} 
                className="min-h-screen flex items-center justify-center bg-black p-4"
            >
            <h1 className="full-stack text-4xl text-white">
            Need a hand with your digital project or tech <br />
            infrastructure? I'm a full-stack developer who loves <br /> 
            a good challenge. Let's chat!
            </h1>
            </section>
        </>
    )
}

export default Motivation;
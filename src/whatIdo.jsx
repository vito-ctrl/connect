import './styles/whatIdo.css'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function WhatIdo(){
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
        //   markers: true,
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
            <div className='whatIdo'>
                <h1 id='whatI'>What ❣ I ☘︎ Do</h1>
                <h5 id='build'>I can build any website you can imagine from <br />informational & portfolio websites to business sites <br />or eCommerce using</h5>
                <h5 id='build'>the latest tools for a smooth and up-to-date experience</h5>
            </div>
            <section 
                ref={sectionRef} 
                className="min-h-screen flex items-center justify-center bg-black p-4"
            >
            <h1 className="full-stack text-4xl text-white">
            As a full-stack developer driven by <br /> technology, I provide tailored digital <br />solutions that align with client needs for <br />impactful and valuable outcomes.
            </h1>
            </section>
        </>
    )
}

export default WhatIdo;
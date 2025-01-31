import './styles/Me.css';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from "gsap/SplitText";


gsap.registerPlugin(ScrollTrigger);

function Me() {

    /////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const text = document.querySelector("#scramble p");
        const chars = "abcdefghijklmnopqrstuvwxyz";
        
        function scramble() {
            let counter = 0;
            const finalText = text.textContent;
            
            gsap.to({}, {
                duration: 2,
                onUpdate: () => {
                    text.textContent = finalText
                        .split("")
                        .map((char, i) => {
                            if (i < counter) return finalText[i];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("");
                    counter += 0.5;
                }
            });
        }

        ScrollTrigger.create({
            trigger: "#scramble",
            start: "top center",
            onEnter: scramble,
            onEnterBack: scramble,
        });

    }, []);

    useEffect(() => {console.clear();

        gsap.registerPlugin(SplitText, ScrollTrigger);
        
        let split, tl;
        
        const createSplit = () => {
            if (split) split.revert();
            if (tl) tl.revert();
          split = new SplitText(".wrapper p", {
            type: "chars"
          });
        
          tl = gsap
            .timeline({
              scrollTrigger: {
                trigger: "#textSection",
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: 0.75,
                markers: true
              }
            })
            .tl.to(
              split.chars,
              {
                color: "#ffcc66",
                stagger: 0.1
              },
              0.1
            );
        };
        createSplit();
        const debouncer = gsap.delayedCall(0.2, createSplit).pause();
        
        window.addEventListener("resize", () => debouncer.restart(true));})

    return(
        <>
            <h1 id='me'>ME●</h1>
            <div className='that_Me'>
                <h5 id='how_iam'>Specializing in Full-Stack <br />Development, I combine UI/UX <br />Design with <br />server-side scripting and database <br />expertise.</h5>
                <h5 id='how_iam'>I'm AYMANE, 20 years old <br /> Web Devloper. <br />and I'am from morocco ♥. </h5>
                <h5 id='UI'>Full-Stack Development <br />UI/UX design <br />Digital branding</h5>
            </div>

            <div id="scramble">
                <p>gggggggggggggggggggggggggg</p>
            </div>
            <section id="textSection">
                <div class="container">
                    <div class="wrapper">
                    <p class="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur voluptatem quae ea similique adipisci reprehenderit vero voluptatum, debitis exercitationem nisi ad mollitia? Molestias veniam sint quisquam ea et dolorum nesciunt rem saepe id, amet vero, necessitatibus esse reiciendis molestiae.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Me
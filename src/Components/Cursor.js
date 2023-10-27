import React, { useEffect } from 'react'
import "./Cursor.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor');
        const links = document.querySelectorAll('.hover');
        const cursorText = document.querySelector('.cursor-text');

        const onMouseMove = event => {
            const { clientX, clientY } = event;
            gsap.to(cursor, {
                x: clientX,
                y: clientY,
                duration: 0.3,
                ease: "power1"
            });
        }

        const onMouseEnterLink = event => {
            const link = event.target;
            if (link.classList.contains('view')) {
                gsap.to(cursor, {
                    scale: 4,
                    backgroundColor: 'white', 
                    color: 'black',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    borderRadius: '50%'
                });
                // cursor.style.boxShadow = "0 0 10px rgba(0,0,0,250)";
                cursorText.style.display = 'block';
            } else if(link.classList.contains('special')) {
                gsap.to(cursor, {
                    scale: 4,
                    backgroundColor: 'white',
                    display: 'flex',
                    width: '85px',
                    height: '85px',
                    borderRadius: '5px',
                });
                // cursor.style.boxShadow = "0 0 10px rgba(0,0,0,250)";
                cursor.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.050), rgba(0,0,0,0.050)), url("https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2018/06/5b1e640dad5b3.jpg")'
                cursorText.style.display = 'block';
                cursorText.style.backgroundColor = "white"
                cursorText.style.padding = "6px"
                cursorText.style.borderRadius = '50%'
            } else {
                gsap.to(cursor, {
                    scale: 4,
                    display: 'flex'
                });
            }
        }

        // .custom-cursor{
        //     position: fixed;
        //     top: 0;
        //     left: 0;
        //     width: 20px;
        //     height: 20px;
        //     border-radius: 50%;
        //     pointer-events: none;
        //     z-index: 999;
        //     mix-blend-mode: difference;
        //     /* padding: 0px; */
        //     justify-content: center;
        //     align-items: center;
        //     display: none;
        // }
        
        // .cursor-text{
        //     font-size: 5px;
        //     font-weight: 900;
        //     /* letter-spacing: 1px; */
        //     display: none;
        // }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {
                scale: 0.1,
                // backgroundColor: 'white',
                mixBlendMode: 'difference',
                display: 'none'
            });
            cursor.style.backgroundImage = "none";
            cursor.style.boxShadow = "none";
            cursorText.style.display = "none";
        }

        document.addEventListener('mousemove', onMouseMove);
        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnterLink);
            link.addEventListener('mouseleave', onMouseLeaveLink);
        });

        // Cleanup event listeners saat komponen dibongkar
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            links.forEach(link => {
                link.removeEventListener('mouseenter', onMouseEnterLink);
                link.removeEventListener('mouseleave', onMouseLeaveLink);
            });
        };
    }, []);

    return (
        <div id='custom-cursor' className='custom-cursor'>
            <span className='cursor-text'>View</span>
        </div>
    )
}

export default Cursor
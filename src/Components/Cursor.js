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
                duration: 0.1,
                ease: "power1",
            });
        }

        const onMouseEnterLink = event => {
            const link = event.target;
            if (link.classList.contains('view')) {
                gsap.to(cursor, {
                    scale: 4,
                    // backgroundColor: 'white',   
                    mixBlendMode: 'normal',
                    display: 'flex'
                });
                cursor.style.boxShadow = "0 0 10px rgba(0,0,0,750)";
                cursorText.style.display = 'block';
            } else {
                gsap.to(cursor, {
                    scale: 4,
                });
            }
        }

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {
                scale: 0.1,
                // backgroundColor: 'white',
                mixBlendMode: 'difference',
                display: 'none'
            });
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
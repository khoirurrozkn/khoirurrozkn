import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Magnetic = ({ children }) => {
    const magnetic = useRef(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const mouseMove = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        magnetic.current.addEventListener("mousemove", mouseMove);
        magnetic.current.addEventListener("mouseleave", mouseLeave);

        return () => {
            magnetic.current.removeEventListener("mousemove", mouseMove);
            magnetic.current.removeEventListener("mouseleave", mouseLeave);
        };
    }, []);

    return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;

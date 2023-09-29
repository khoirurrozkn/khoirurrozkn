import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const handleGsap = (ref, trigger, fromY = 0, toY, start, end) => {

    if( trigger.current && ref.current ){
        gsap.fromTo(ref.current,  {
            y: fromY,
        },
        {
            y: toY,
            duration: 8,
            scrollTrigger: {
                trigger: trigger.current,
                start: start,
                end: end,
                scrub: 4,
                toggleActions: 'restart none none none',
                markers: true
            },
        });
    }
}

export default handleGsap;
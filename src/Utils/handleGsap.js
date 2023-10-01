import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const handleGsap = (ref, trigger, from = 0, to, start, end, type = 'y') => {
    const config = {
        [type]: from,
    };

    const animationConfig = {
        [type]: to,
        duration: 8,
        scrollTrigger: {
            trigger: trigger.current,
            start: start,
            end: end,
            scrub: 4,
            toggleActions: 'restart none none none',
        },
    };

    if( trigger.current && ref.current ){
        gsap.fromTo(ref.current, config, animationConfig);
    }
}

export default handleGsap;
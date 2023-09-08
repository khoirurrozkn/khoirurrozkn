// import React, { useEffect, useRef } from 'react';
// import './Porto.css';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// const Porto = () => {
//   const testing = useRef(null);

//   useEffect(() => {
//     if (testing.current) {

//       gsap.fromTo(testing.current,  {
//           x: 0,
//         },
//         {
//           x: 100,
//           duration: 8,
//           scrollTrigger: {
//             trigger: testing.current,
//             start: 'top 80%',
//             end: 'top 30%',
//             scrub: 4,
//             toggleActions: 'restart none none none',
//             markers: true,
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <div className='text-light test h-100 d-flex align-items-center justify-content-center'>
//       <div ref={testing} className='bg-danger'></div>
//     </div>
//   );
// }

// export default Porto;


import React from 'react';

const Porto = () => {
  return(
    <div>Hallo</div>
  )
}

export default Porto
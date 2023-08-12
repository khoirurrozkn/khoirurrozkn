import React, { useState } from 'react';
import sun from '../img/sun.png';
import moon from '../img/moon.png';

const LightMode = (props) => {
    const [ lightMode, setLightMode ] = useState(false);

    const body = document.querySelector("body");
    body.style.transition = 'all 0.8s, ease-in-out'

    const toggleLight = () => {
        body.setAttribute("data-theme", "light");
        setLightMode(true);
    }

    const toggleDark = () => {
        body.setAttribute("data-theme", "dark");
        setLightMode(false);
    }

    const toggleTheme = () => {
        if( !lightMode ){
            toggleLight();
        }else{
            toggleDark();
        }
    }

    return (
        <>
            <style>
                {`
                    .iconTheme{
                        cursor: pointer;
                    }
                `}
            </style>
            <img className='iconTheme' width='100%' height='100%' src={lightMode? sun : moon} onClick={() => toggleTheme()} alt='iconMode'></img>
        </>

    )
}

export default LightMode;
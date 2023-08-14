import React, { useEffect, useState } from 'react';
import sun from '../img/sun.png';
import moon from '../img/moon.png';

const LightMode = () => {
    const [ lightMode, setLightMode ] = useState(false);

    const body = document.querySelector("body");
    body.style.transition = 'all 0.8s, ease-in-out'

    const toggleLight = () => {
        body.setAttribute("data-theme", "light");
        setLightMode(true);
        localStorage.setItem('data-theme', 'light');
    }

    const toggleDark = () => {
        body.setAttribute("data-theme", "dark");
        setLightMode(false);
        localStorage.setItem('data-theme', 'dark');
    }

    const toggleTheme = () => {
        if (!lightMode) {
            toggleLight();
        } else {
            toggleDark();
        }
    }

    useEffect(() => {
        const dataTheme = localStorage.getItem('data-theme');

        if (dataTheme === 'light') {
            body.setAttribute("data-theme", "light");
            setLightMode(true);
        }else{
            body.setAttribute("data-theme", "dark");
            setLightMode(false);
        }

    }, [body]); // Menambahkan toggleLight ke dalam array ketergantungan

    return (
        <>
            <style>
                {`
                    .iconTheme {
                        cursor: pointer;
                    }
                `}
            </style>
            <img className='iconTheme shadow rounded-circle' width='100%' height='100%' src={lightMode ? sun : moon} onClick={() => toggleTheme()} alt='iconMode'></img>
        </>

    )
}

export default LightMode;

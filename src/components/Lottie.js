import React from 'react'
import Lottie from 'react-lottie';

const WrapLottie = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: props.animasi,
    };

    return (
        <Lottie
            options={defaultOptions}
            style={props.style}
        />
    )
}

export default WrapLottie;
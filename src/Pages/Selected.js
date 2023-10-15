import React, { useEffect } from 'react'

const Selected = () => {
    const hashParams = window.location.hash.split('?')[1];
    const urlParams = new URLSearchParams(hashParams);
    const paramValue = urlParams.get('awd');
    const url = 'https://khoirurrozkn.github.io/khoirurrozkn';
    
    useEffect(() => {
        if ( paramValue) {
            console.log(`Nilai dari parameter 'awd' adalah: ${paramValue}`);
        } else {
            window.location.href = url;
        }
    },[]);
    
  return (
    <div>Hallo gengs</div>
  )
}

export default Selected
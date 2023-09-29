import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const LazyLoadImageComponent = (props) => {
  return (
    <LazyLoadImage
        alt={"This is Photo"}
        effect="blur"
        placeholderSrc={props.placeholderSrc}
        src={props.src}
        width={'100%'}
        className={props.className}
    />
  )
}

export default LazyLoadImageComponent
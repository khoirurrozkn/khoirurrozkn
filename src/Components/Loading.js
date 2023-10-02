import React from 'react'
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return(
      <div style={{backgroundColor: '#999C9F'}} className='vh-100 d-flex justify-content-center align-items-center'>
        <Spinner />
      </div>
    )
}

export default Loading
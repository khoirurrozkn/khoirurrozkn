import React from 'react'

const BoxPorto = (props) => {
  return (
    <>
      <style>
        {`
          #accord{
            margin: 0px;
          }

          #accord .desc{
            width: 50%;
            height: 100%;
            padding-left: 5%;
            letter-spacing: 1px;
          }

          #accord .desc h5{
            font-family: 'Abril Fatface', cursive;
            font-size: 40px;
          }

          #accord .desc .message{
            font-size: 18px;
          }

          #accord .desc .tech{
            font-size: 15px;
          }

          #accord .photo{
            width: 50%;
            padding: 10px 0px;
            padding-right: 5%;
          }

          #accord .photo img{
            width: 60%;
            border: solid 20px #F2F4F3;
          }

          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){
            #accord{
              margin-bottom: 20px;
            }

            #accord .desc h5{
              font-size: 35px;
              letter-spacing: 0px;
            }

            #accord .photo img{
              width: 70%;
              border: solid 15px #F2F4F3;
            }
          }

          @media only screen and (max-device-width: 767px){
            #accord{
              margin-bottom: 40px;
              border: none !important;
            }
            
            #accord .desc{
              width: 100%;
              height: auto;
              padding-left: 4%;
            }
            
            #accord .desc h5{
              font-size: 26px;
              letter-spacing: 0px;
            }

            #accord .desc .message{
              font-size: 17px;
              letter-spacing: 1px;
            }

            #accord .desc .tech{
              font-size: 14px;
              letter-spacing: 1px;
            }
            
            #accord .photo{
              width: 100%;
              text-align: center !important;
              padding: 10px 0px;
              padding-right: 0%;
            }
            
            #accord .photo img{
              width: 90%;
            }

            #accord a{
              font-size: 14px;
            }
          }
        `}
      </style>
      <div id='accord' className='row p-0 border-top d-flex align-items-center justify-content-between flex-wrap border-black border-opacity-25'>
        <div className='desc col col-12 order-2 order-lg-1 order-md-1'>
          <h5 className='text-black text-opacity-75'>
            {props.title}
          </h5>
          <p className='message text-black m-0'>
            {props.desc}
          </p>
          <p className='tech text-black text-opacity-75 m-0 mt-2'>
            {props.tech}
            {props.development !== true &&
              <a href={props.href} target='blank' style={{ background: '#5E503F' }} className='ms-2 text-light btn px-3 py-1 shadow'>
                <span>Go</span> <i class="bi bi-box-arrow-up-right"></i>
              </a>
            }
          </p>
        </div>
        <div className='photo col col-12 order-1 order-lg-2 order-md-2 text-end border-danger'>
          <img loading='lazy' src={props.img} alt='Portofolio ss'></img>
        </div>
      </div>
    </>
  )
}

export default BoxPorto
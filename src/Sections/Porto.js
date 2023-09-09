import React from 'react';
import bgHeader from '../img/bgHeader.webp'

const Porto = () => {
  return(
    <>
      <style>
        {`
          #porto .wrap-title h1{
            font-family: 'Oswald', sans-serif;
            user-select: none;
            font-weight: 200;
            padding-left: 5%;
            letter-spacing: 2px;
            margin-bottom: -20px !important;
          }

          #porto .wrap-title h5{
            font-family: 'Abril Fatface', cursive;
            font-size: 70px;
            padding-left: 9%;
          }

          #porto .wrap-title p{
            letter-spacing: 1px;
            padding-left: 7%;
          }

          #porto .wrap-field{
            padding-top: 40px !important;
            padding-left: 10%;
            padding-right: 10%;
          }

          #porto .wrap-field .accord{
            margin-bottom: 20px;
            transition: 0.5s;
          }

          #porto .wrap-field .accord:hover{
            transform: scale(1.03);
            cursor: pointer;
          }

          #porto .wrap-field .accord .desc{
            width: 50%;
            height: 100%;
            padding-left: 5%;
            letter-spacing: 1px;
          }

          #porto .wrap-field .accord .desc h5{
            font-size: 35px;
          }

          #porto .wrap-field .accord .desc .message{
            font-size: 19px;
          }

          #porto .wrap-field .accord .photo{
            width: 50%;
            padding: 10px 0px;
            padding-right: 5%;
          }

          #porto .wrap-field .accord .photo img{
            width: 60%;
          }

          @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){
            #porto .wrap-title h1{
              margin-bottom: 0% !important;
            }

            #porto .wrap-field{
              padding-left: 0%;
              padding-right: 0%;
            }

            #porto .wrap-field .accord .desc .message{
              font-size: 22px;
              margin: 0;
            }

            #porto .wrap-field .accord .photo img{
              width: 90%;
            }

            #porto .wrap-field .accord{
              margin-bottom: 30px !important;
              transition: 0.5s;
            }
          }

          @media only screen and (max-device-width: 767px){
            #porto .wrap-title h1{
              margin-bottom: 0% !important;
            }
            
            #porto .wrap-title h5{
              font-size: 40px;
            }
            
            #porto .wrap-title p{
              padding-left: 0%;
              text-align: center;
            }
            
            #porto .wrap-field{
              padding-top: 40px !important;
              padding-left: 0%;
              padding-right: 0%;
            }
            
            #porto .wrap-field .accord{
              margin-bottom: 40px !important;
              border: none !important;
            }
            
            #porto .wrap-field .accord .desc{
              width: 90%;
              height: auto;
              padding-left: 4%;
              letter-spacing: 1px;
            }
            
            #porto .wrap-field .accord .desc h5{
              font-size: 30px;
            }

            #porto .wrap-field .accord .desc .message{
              font-size: 15px;
            }
            
            #porto .wrap-field .accord .photo{
              width: 100%;
              text-align: center !important;
              padding: 10px 0px;
              padding-right: 0%;
            }
            
            #porto .wrap-field .accord .photo img{
              width: 90%;
            }
          }
        `}
      </style>
      <div className='wrap-title position-relative'>
        <h1 className='text-light text-opacity-75 m-0'>
          Digital
        </h1>
        <h5 className='m-0 text-light'>
          Portofolio
        </h5>
        <p className='m-0 text-light text-opacity-75'>
          Click the 'Porto' option to proceed to the website.
        </p>
      </div>

      <div className='wrap-field'>

        <div className='accord row m-0 p-0 border-top border-bottom d-flex align-items-center justify-content-between flex-wrap border-secondary border-opacity-50'>
          <div className='desc col col-12 order-2 order-lg-1 order-md-1'>
            <h5 className='text-light'>
              Weather app
            </h5>
            <p className='message text-light'>
              awdaw dawg dayw gduawduaw fduaw fdyawt fdytaw dytawdytawdytaw fdyta dta
               uawyduawy duaw dtua6wdua6w dua6 wdu6aw du6a wdu6a wrdu6a d6arw
            </p>
            <p className='text-light text-opacity-75 m-0'>
              React Js | open meteo API
            </p>
          </div>
          <div className='photo col col-12 order-1 order-lg-2 order-md-2 text-end border-danger'>
            <img src={bgHeader} alt='Portofolio ss'></img>
          </div>
        </div>

        <div className='accord row m-0 p-0 border-top border-bottom d-flex align-items-center justify-content-between flex-wrap border-secondary border-opacity-50'>
          <div className='desc col col-12 order-2 order-lg-1 order-md-1'>
            <h5 className='text-light'>
              Weather app
            </h5>
            <p className='message text-light'>
              awdaw dawg dayw gduawduaw fduaw fdyawt fdytaw dytawdytawdytaw fdyta dta
               uawyduawy duaw dtua6wdua6w dua6 wdu6aw du6a wdu6a wrdu6a d6arw
            </p>
            <p className='text-light text-opacity-75 m-0'>
              React Js | open meteo API
            </p>
          </div>
          <div className='photo col col-12 order-1 order-lg-2 order-md-2 text-end border-danger'>
            <img src={bgHeader} alt='Portofolio ss'></img>
          </div>
        </div>

        {/* <div className='accord border-top border-bottom d-flex align-items-center justify-content-between flex-wrap border-secondary border-opacity-50'>
          <div className='desc'>
            <h5 className='text-light'>
              Weather app
            </h5>
            <p className='message text-light'>
              awdaw dawg dayw gduawduaw fduaw fdyawt fdytaw dytawdytawdytaw fdyta dta
               uawyduawy duaw dtua6wdua6w dua6 wdu6aw du6a wdu6a wrdu6a d6arw
            </p>
            <p className='text-light text-opacity-75 m-0'>
              React Js | open meteo API
            </p>
          </div>
          <div className='photo text-end border-danger'>
            <img src={bgHeader} alt='Portofolio ss'></img>
          </div>
        </div>

        <div className='accord border-top border-bottom d-flex align-items-center justify-content-between flex-wrap border-secondary border-opacity-50'>
          <div className='desc'>
            <h5 className='text-light'>
              Weather app
            </h5>
            <p className='message text-light'>
              awdaw dawg dayw gduawduaw fduaw fdyawt fdytaw dytawdytawdytaw fdyta dta
               uawyduawy duaw dtua6wdua6w dua6 wdu6aw du6a wdu6a wrdu6a d6arw
            </p>
            <p className='text-light text-opacity-75 m-0'>
              Portfolio that I am currently developing with React Js | open meteo API
            </p>
          </div>
          <div className='photo text-end border-danger'>
            <img src={bgHeader} alt='Portofolio ss'></img>
          </div>
        </div> */}

      </div>
    </>
  )
}

export default Porto
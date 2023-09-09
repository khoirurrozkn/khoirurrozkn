import React from 'react';
import weatherApp from '../img/weatherApp.webp';
import kukiGames from '../img/kukiGames.png';

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
            margin: 0px;
            transition: 0.5s;
          }

          #porto .wrap-field .accord:hover{
            transform: scale(1.03);
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
              margin-bottom: 40px;
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

        <div className='accord row p-0 border-top rounded-4 d-flex align-items-center justify-content-between flex-wrap border-secondary border-opacity-50'>
          <div className='desc col col-12 order-2 order-lg-1 order-md-1'>
            <h5 className='text-light'>
              Weather app
            </h5>
            <p className='message text-light'>
              The weather information, including temperature and forecasts.
            </p>
            <p className='text-light text-opacity-75 m-0'>
              React Js | open meteo API
              <a href='https://weather-git-master-khoirurrozkn.vercel.app/' target='blank' className='ms-2'>
                Go <i class="bi bi-box-arrow-up-right"></i>
              </a>
            </p>
          </div>
          <div className='photo col col-12 order-1 order-lg-2 order-md-2 text-end border-danger'>
            <img src={weatherApp} alt='Portofolio ss'></img>
          </div>
        </div>

        <div className='accord row m-0 p-0 border-top rounded-4 d-flex align-items-center justify-content-between flex-wrap border-secondary border-opacity-50'>
          <div className='desc col col-12 order-2 order-lg-1 order-md-1'>
            <h5 className='text-light'>
              Donload games
            </h5>
            <p className='message text-light'>
              Providing game download links and game recommendations.
            </p>
            <p className='text-light text-opacity-75 m-0'>
              React Js | open meteo API
              <a href='https://kukigames.vercel.app/' target='blank' className='ms-2'>
                Go <i class="bi bi-box-arrow-up-right"></i>
              </a>
            </p>
          </div>
          <div className='photo col col-12 order-1 order-lg-2 order-md-2 text-end border-danger'>
            <img src={kukiGames} alt='Portofolio ss'></img>
          </div>
        </div>

        <p style={{ userSelect: 'none', letterSpacing: '1px' }} className='bottom-0 m-0 mt-5 fs-5 text-center w-100 text-light'>
          <a href='awdawd'>
            View more Portofolio <i class="bi bi-box-arrow-up-right ms-2"></i>
          </a>
        </p>

      </div>
    </>
  )
}

export default Porto
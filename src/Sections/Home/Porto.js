import React from 'react';
import weatherApp from '../../img/weatherApp.webp';
import kukiGames from '../../img/kukiGames.png';

const Porto = () => {
  return(
    <>
      <style>
        {`

          #porto .wrap-porto-radius{
            border-bottom-left-radius: 20%;
          }

          #porto .wrap-title{

          }

          #porto .wrap-title h1{
            font-family: 'Oswald', sans-serif;
            user-select: none;
            font-weight: 200;
            padding-right: 15%;
            letter-spacing: 2px;
            margin-bottom: -20px !important;
          }

          #porto .wrap-title h5{
            font-family: 'Abril Fatface', cursive;
            font-size: 70px;
          }

          #porto .wrap-title p{
            letter-spacing: 1px;
            padding-left: 10%;
          }

          #porto .wrap-field{
            padding-top: 80px !important;
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
            font-family: 'Abril Fatface', cursive;
            font-size: 40px;
          }

          #porto .wrap-field .accord .desc .message{
            font-size: 20px;
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
            #porto .wrap-field{
              padding-left: 0%;
              padding-right: 0%;
              padding-top: 40% !important;
            }

            #porto .wrap-field .accord .desc .message{
              font-size: 22px;
              margin: 0;
              margin-bottom: 10px;
            }

            #porto .wrap-field .accord .photo img{
              width: 90%;
            }

            #porto .wrap-field .accord{
              margin-bottom: 30px !important;
              transition: 0.5s;
              border: none !important;
            }
          }

          @media only screen and (max-device-width: 767px){
            #porto .wrap-title{
              padding-left: 0%;
              text-align: start !important;
            }

            #porto .wrap-porto-radius{
              border-bottom-left-radius: 100px;
            }

            #porto .wrap-title h1{
              margin-bottom: -2% !important;
              padding-right: 0%;
              padding-left: 5%;
            }
            
            #porto .wrap-title h5{
              font-size: 40px;
              padding-left: 5%;
            }
            
            #porto .wrap-title p{
              padding-left: 0%;
              text-align: center;
              font-size: 15px;
            }
            
            #porto .wrap-field{
              padding-top: 40px !important;
              padding-left: 0%;
              padding-right: 0%;
            }
            
            #porto .wrap-field .accord{
              margin-bottom: 40px;
              border: none !important;
            }
            
            #porto .wrap-field .accord .desc{
              width: 100%;
              height: auto;
              padding-left: 4%;
            }
            
            #porto .wrap-field .accord .desc h5{
              font-size: 30px;
            }

            #porto .wrap-field .accord .desc .message{
              font-size: 18px;
              letter-spacing: 1px;
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
      <div id='wrapPorto' className='wrap-porto-radius' style={{ 
          background: '#EAE0D5',  
          paddingTop: '12vh',
          paddingBottom: '6vh',
        }}
      >
        <div className='wrap-title text-center position-relative'>
          <h1 className='text-black text-opacity-75 m-0'>
            Digital
          </h1>
          <h5 className='m-0 text-black text-opacity-75'>
            Portofolio
          </h5>
          <p className='m-0 fs-6 text-black'>
            Click the 'Porto' option to proceed to the website.
          </p>
        </div>

        <div className='wrap-field'>

          <div className='accord row p-0 border-top d-flex align-items-center justify-content-between flex-wrap border-black border-opacity-75'>
            <div className='desc col col-12 order-2 order-lg-1 order-md-1'>
              <h5 className='text-black text-opacity-75'>
                Weather app
              </h5>
              <p className='message text-black'>
                The weather information, including temperature and forecasts.
              </p>
              <p className='text-black text-opacity-75 m-0'>
                React Js | open meteo API
                <a href='https://weather-git-master-khoirurrozkn.vercel.app/' target='blank' className='ms-2 text-black text-opacity-75 border border-black border-opacity-75 rounded-circle px-3 py-1 shadow'>
                  Go <i class="bi bi-box-arrow-up-right"></i>
                </a>
              </p>
            </div>
            <div className='photo col col-12 order-1 order-lg-2 order-md-2 text-end border-danger'>
              <img src={weatherApp} style={{ border: 'solid 30px #F2F4F3' }} alt='Portofolio ss'></img>
            </div>
          </div>

          <div className='accord row m-0 p-0 border-top d-flex align-items-center justify-content-between flex-wrap border-black border-opacity-75'>
            <div className='desc col col-12 order-2 order-lg-1 order-md-1'>
              <h5 className='text-black text-opacity-75'>
                Download games
              </h5>
              <p className='message text-black'>
                Providing game download links and game recommendations.
              </p>
              <p className='text-black text-opacity-75 m-0'>
                React Js | open meteo API
                <a href='https://kukigames.vercel.app/' target='blank' className='ms-2 text-black text-opacity-75 border border-black border-opacity-75 rounded-circle px-3 py-1 shadow'>
                  Go <i class="bi bi-box-arrow-up-right"></i>
                </a>
              </p>
            </div>
            <div className='photo col col-12 order-1 order-lg-2 order-md-2 text-end border-danger'>
              <img src={kukiGames} style={{ border: 'solid 30px #A9927D' }} alt='Portofolio ss'></img>
            </div>
          </div>

          <p style={{ userSelect: 'none', letterSpacing: '1px' }} className='bottom-0 m-0 mt-5 fs-5 text-center w-100'>
            <a href='awdawd' className='text-black btn border border-black border-opacity-75 shadow rounded-circle p-3' >
              <span>View more Portofolio</span> <i class="bi bi-box-arrow-up-right ms-2"></i>
            </a>
          </p>

        </div>

      </div>
    </>
  )
}

export default Porto
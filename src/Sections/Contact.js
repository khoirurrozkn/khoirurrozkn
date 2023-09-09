import React from 'react'

const Contact = () => {

  return (
    <>
    <style>
      {`
        #contact{
          letter-spacing: 1px;
        }

        #contact h5{
          font-weight: 200;
        }

        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px){
          #contact .box-1{
            width: 50%;
            text-align: center;
          }

          #contact .box-2{
            width: 50%;
            text-align: center;
            margin-top: 30px;
          }
        }

        @media only screen and (max-device-width: 767px){
          #contact h5{
            font-size: 17px;
          }

          #contact .map{
            width: 90%;
            height: 100px;
          }

          #contact .box-1{
            width: 50%;
            text-align: center;
          }

          #contact .box-2{
            width: 50%;
            text-align: center;
            margin-top: 30px;
          }
        }
      `}
    </style>
    <div className='text-light d-flex flex-wrap align-items-center justify-content-evenly'>

      <div className='box-1'>
        <p style={{ userSelect: 'none' }} className='text-light text-opacity-75'>
          ADDRESS
        </p>
        <h5>
          Tenggilis lama III / 35
        </h5>
      </div>

      <div className='box-1'>
        <p style={{ userSelect: 'none' }} className='text-light text-opacity-75'>
          Contact
        </p>
        <h5>
          <a href="mailto:irurkampus@gmail.com?subject=Tentang%20portofolio" target='blank' className='text-light'>
            irurkampus@gmail.com
          </a>    
        </h5>
        <h5>
          <a href="https://api.whatsapp.com/send?phone=nomor-telepon-anda&text=Hallo%20Khoirur" target='blank' className='text-light'>
            +62 821 3930 6484
          </a>
        </h5>
      </div>

      <div className='box-2'>
        <p style={{ userSelect: 'none' }} className='text-light text-opacity-75'>
          FOLLOW
        </p>
        <h5>
          <a href='https://www.instagram.com/' target='blank' className='text-light'>
            khoirurrozkn
          </a>
        </h5>
        <h5>
          <a href='https://github.com/' target='blank' className='text-light'>
            khoirurrozkn
          </a>
        </h5>
      </div>

      <div className='box-2'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3271987388493!2d112.76026877505915!3d-7.3170931926909635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb1d58af8ff1%3A0x50a41159a084aaef!2sJl.%20Tenggilis%20Lama%20III%20A%20No.35%2C%20Tenggilis%20Mejoyo%2C%20Kec.%20Tenggilis%20Mejoyo%2C%20Surabaya%2C%20Jawa%20Timur%2060292!5e0!3m2!1sid!2sid!4v1694233493792!5m2!1sid!2sid" 
          allowfullscreen="" 
          loading="lazy" 
          style={{ userSelect: 'none' }}
          referrerpolicy="no-referrer-when-downgrade"
          className='border-0 map'
        ></iframe>
      </div>

    </div>

    </>
  )
}

export default Contact
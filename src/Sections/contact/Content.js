import React,{ useState} from 'react'
import axios from 'axios'
import './Content.css';

const Content = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const FetchMessages = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/send-email`,{
                'name': data.name,
                'email': data.email,
                'message': data.message
            });

            alert(response.data.message);

        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
    };


  return (
    <>
    <div data-aos='fade-up' className='content position-relative d-flex justify-content-center'>
        <div className='wrap-content'>
            <p>
                Let's embark on
            </p>
            <p>
                a project together.
            </p>

            <form onSubmit={FetchMessages} className='d-flex flex-wrap'>
                <div className='wrap-input w-100'>
                    <label htmlFor='name'>What's your name?</label><br/>
                    <input value={data.name} onChange={handleChange} type='text' name='name' id='name' placeholder='Upin & Ipin'></input>
                </div>
                <div className='wrap-input w-100'>
                    <label htmlFor='email'>What's your email?</label><br/>
                    <input value={data.email} onChange={handleChange} type='email' name='email' id='email' placeholder='Upin@Ipin.com'></input>
                </div>
                <div className='wrap-input w-100'>
                    <label htmlFor='message'>Leave a message here</label><br/>
                    <textarea style={{borderBottom: 'solid 1px rgba(0,0,0,0.500)'}} value={data.message} onChange={handleChange} name='message' id='message' placeholder='Hey khoirur, can you help me with...'></textarea>
                </div>
                <div className='w-100 text-center'>
                    <button type='submit' className='btn btn-send text-light shadow rounded-5 mb-1'>Send Message</button>
                </div>
            </form>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" style={{backgroundColor: '#1C1D20'}} viewBox="0 0 1440 320">
            <path fill="#FFFFFF" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,256C384,277,480,267,576,234.7C672,203,768,149,864,154.7C960,160,1056,224,1152,261.3C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
    </>
  )
}

export default Content
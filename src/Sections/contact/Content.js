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
    <div className='content position-relative d-flex justify-content-center'>
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
                    <button type='submit' className='btn text-light shadow rounded-5 mb-1'>Send Message</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Content
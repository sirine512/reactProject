import React, { useState } from 'react'
import '../Style/style.css'

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
          <form className='contactContent'>
            <h1>Contact Us</h1>
      <div>
        <label >Name</label><br/>
        <input
          type="text"
          placeholder='Enter Your Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email</label><br/>
        <input
          type="email"
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Message</label><br/>
        <textarea
          placeholder='Enter Your Message...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" id='contact-btn' onClick={()=>{alert('Your Message Send')}} >Submit</button>
    </form>

    </>
  )
}

export default ContactUs

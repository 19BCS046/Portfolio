import React, { useRef } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';
const Perumal = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ghqwcws', 'template_2qn31fo', form.current, 'UJ5hZSgZNrm6cTuQH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact'>
        <h1 className='contacthead'>Contact  Me</h1>
        <span className='contactDesc'></span>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='your name' name="your_name"></input>
            <input type='text' className='email' placeholder='your email' name="your_email"></input>
            <textarea className='msg' rows='5' name='message' placeholder='your message'></textarea>
            <button type='submit' value='Send' className='sbtn'>Submit</button>
        </form>
    </div>
  )
};

export default Perumal;
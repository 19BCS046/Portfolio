import React from 'react'
import './intro.css';
import i3 from '../../images/i3.jpg';
import {Link} from 'react-scroll';
import hire1 from '../../images/hire1.png';
const Intro = () => {
  return (
    <section id="intro">
       <div className='introduct'>
        <span className='hello'>Hello,</span>
        <span className='intext'>I'm <span className='introname'>Perumal </span><br/>Web Developer</span>
        <p className='intropara'>I am a web developer who loves to create and beautify websites. I love making new<br/> websites which are easy to use and can be accessed by anyone.I love to have my clients<br/> happy with the site's performance, which they are able to see on their personal devices.</p>
       <Link> <button className='btn1'><img src={hire1} alt='hire' className='hire'></img>Hire Me</button></Link> 
        </div> 
           <img src={i3} alt='port' className='porti'></img>
    </section>
  )
}

export default Intro;
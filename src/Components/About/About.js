import React from 'react'
import './about.css';

const About = () => {
  return (
    <>
    <div className='About'>
        <h1 className='Abouthead'>About Me</h1>
        <span className='aboutdesc'>I am 2023 passed out Graduate Engineer in B.E - Computer Science and Engineering.I am Passionate to develop web page and solving Coding problems daily. My Hobbies are Play Cricket,Fishing and Listening Music.</span>
        <div className='edu'>
        <h2 className='Abouthead'>Education Details</h2>
        </div>
        </div>
        <div className='clg'>
            <div className='clgedu'>
        <h3>2019-2023</h3>
        <span className='clgdetails'>Dr.Mahalingam College of  Engineering and Technology ,Pollachi. </span>
        <span className='schmark'>CGPA : 8.0</span>
        </div>
        <div className='sch12'>
        <h3>2018-2019</h3>
        <span className='clgdetails'>Sri Vijayaa Vidhyalaya Matriculation Higher Secondary School,Harur.</span>
        <span className='clgmark'>Percenatge : 75%</span>
        </div>
        <div className='sch10'>
        <h3>2016-2017</h3>
        <span className='clgdetails'>Sri Vijayaa Vidhyalaya Matriculation Higher Secondary School,Harur.</span>
        <span className='clgmark'>Percenatge : 87%</span>
        </div>  
    </div>
    </> 
  )
}

export default About
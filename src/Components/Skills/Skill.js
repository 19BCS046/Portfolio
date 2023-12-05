import React from 'react'
import './skill.css';
import r1 from '../../images/r1.png';
import js from '../../images/js.png';
import css from '../../images/css.png';
import html from '../../images/html.png';
import java from '../../images/java.jpg';
import c from '../../images/c.png';
import mysql from '../../images/mysql.png';

const Skill = () => {
  return (
    <section id='skills'>
      <span className='skilltitle'>What I Do</span>
      <span className='skilldesc'>Hi I am Passionate to develop websites and I have done some projects using Html,Css,Javascript and ReactJs And also, I know problem solving skill with Java Language.</span>
     <div className='skillbars'>
      <div className='skillbar'>
        <img src={html} alt='html' className='skillimg'></img>
        <img src={css} alt='css' className='skillimg'></img>
        <img src={js} alt='js' className='skillimg'></img>
        <img src={r1} alt='react' className='skillimg'></img>
        <div className='skilltext'>
          <h2>Front-End Development</h2>
          <p></p> 
        </div>
      </div>
      <div className='skillbar'>
        <img src={c} alt='c' className='skillimg'></img>
        <img src={java} alt='java' className='skillimg'></img>
        <div className='skilltext'>
          <h2>C & Java </h2>
          <p></p> 
        </div>
      </div>
      <div className='skillbar'>
        <img src={mysql} alt='mysql' className='skillimg'></img>
        <div className='skilltext'>
          <h2>MySql Database</h2>
          <p></p> 
        </div>
      </div>
      </div>
    </section>
  );
}

export default Skill;

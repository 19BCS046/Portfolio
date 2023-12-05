import React from 'react';
import './project.css';

const Project = () => {
  return (
    <section id='projects'>
      <div className='head'>
       <table id='project'>
        <th className='prohead'>Project Name</th>
        <th className='prohead'>Project Description</th>
       
        <tr className='project1'>
          <td className='projecttitle'><h2>Online  Loan Management System</h2></td>
          <td className='projectpara'><p>This project intended to simply preserve the details of the
direct lenders. Using Tools are Html,Css,Javascript.</p></td>
        </tr>
        <tr className='project1'>
          <td className='projecttitle'><h2>Online Feedback Management System</h2></td>
          <td className='projectpara'><p>This system collects feedback from the customer ensuring
the safety delivery of parcels. Using Tools are Android
Studio and MySql.</p></td>
</tr>
<tr className='project1'>
          <td className='projecttitle'><h2>Online Crowd Detection System</h2></td>
          <td className='projectpara'><p>It monitors the crowd continuously in a closed environment
and implemented using python. Usings Tools are Visual code
studio,Web Camera and Twilio website.</p></td>
</tr>
<tr className='project1'>
          <td className='projecttitle'><h2>Crime Type Occurrence Prediction System</h2></td>
          <td className='projectpara'><p>The main objective is to extract useful information from many
existing criminal records to predict the next relatable crime.
Using Tools are Jupyter and Python Flask.</p></td>
</tr>
       </table>
       </div>
    </section>
  )
}

export default Project;
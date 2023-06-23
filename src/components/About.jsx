import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='about'>
        <div className="a-title">About Me</div>
        <div className="desc">
        I'm a MERN Stack developer and pursuing BTech from VSSUT, Burla, Odisha. I thrive on combining my technical expertise with creative problem-solving to build innovative and user-friendly web solutions.<br/>
        Throughout my journey at VSSUT, I have immersed myself in the world of computer science, constantly seeking opportunities to expand my knowledge and skills. I have honed my abilities in web development, mastering languages such as HTML, CSS, JavaScript, and frameworks like React and Node.js. Through various projects and collaborations, I have gained hands-on experience in crafting responsive and intuitive websites that meet both aesthetic and functional requirements.
        What truly excites me about web development is the ability to shape the digital landscape and create meaningful user experiences. I enjoy the process of translating ideas into reality, transforming wireframes and mockups into fully functional websites that engage and delight users.
        </div>
        <div className="skill-title">Web development Skills</div>
        <div className="skills">
            <li>HTML</li>
            <li>Css</li>
            <li>MUI</li>
            <li>Bootstrap</li>
            <li>JS</li>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>REST API</li>
            <li>GIT</li>
            <li>Firebase</li>
        </div>
        <div className="skill-title">Programming Skills</div>
        <div className="skills">
            <li>C</li>
            <li>C++</li>
            <li>DSA</li>
        </div>
        <div className="cv">
            <div className="cv-text">Download my Resume here..</div>
            <a href=' https://drive.google.com/file/d/1aP3RXWbHS1en1IH2mirqhaF9js1olWsH/view' target='_blank' >
            <button className='cv-button'>Download</button>
            </a>
        </div>
    </div>
  )
}

export default About
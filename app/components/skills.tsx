
import React from 'react'
import'../style/skills.css'

const Skills = () => {
  return (
    <div id='skills'  className='skills-container'>
        <div className='skills-grid'>
          {/* First Column: Heading and Paragraph */}
        <div data-aos="zoom-in-up" className='skills-left'>
            <h2 className='skills-heading'>Website & Mobile Application That I Design</h2>
            <p className='skills-text'>
            I design mobile applications, websites, and web applications, using design sprints to address challenges 
          users face while interacting with apps or making online purchases. With a passion for learning, 
          I stay updated on the latest technologies to continuously enhance my skill set
          </p>
        </div>

          {/* Second Column : Skills */}
            <div className='skills-right'>
                <div className='skills-icons-grid'>
                  <div className='skills-space'>
                <h2 data-aos="zoom-in-up">Adobe Photoshop</h2>
                <h2 data-aos="zoom-in-up">Adobe Illustrator</h2>
                <h2 data-aos="zoom-in-up">Adobe Xd</h2>
                <h2 data-aos="zoom-in-up">Figma</h2>
                <h2 data-aos="zoom-in-up">Canva</h2>
                </div>
                <div className='skills-space'>
                <h2 data-aos="zoom-in-up">Typography</h2>
                <h2 data-aos="zoom-in-up">Color Theory</h2>
                <h2 data-aos="zoom-in-up">Time Management</h2>
                <h2 data-aos="zoom-in-up">Problem Solving</h2>
                <h2 data-aos="zoom-in-up">Branding</h2>
              </div>
            </div>  
          </div>
        </div>
      </div>
  )
}

export default Skills
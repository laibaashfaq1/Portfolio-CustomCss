import React from 'react'
import Heading from './heading';
import Card from './card';
import'../style/projects.css'


const data = [
  {
      id: 0,
      title: "Your Desire Books",
      desc: `A mobile application using Design Sprint to create an intuitive platform for 
      book discovery and organization through quick prototyping and testing.`,
      img: "/picture0.png",
      tags: ["Figma", "Adobe XD", "UX/UI"],
  },

  {
      id: 1,
      title: "Gemstone Galore Jewelry Website",
      desc: `Addressing the challenges people face when purchasing jewelry online and making the website user-friendly.`,
      img: "/picture1.png",
      tags: ["Adobe XD", "UX/UI", "Case Study"],
  },

  {
      id: 2,
      title: "Vacation Poster",
      desc: "Creating a poster for a travel agency offering customizable tours based on the duration preferred by the travelers.",
      img: "/picture2.png",
      tags: ["Adobe Photoshop", "Branding", "Marketing"],
  },

  {
      id: 3,
      title: "Logo Design",
      desc: "Creating a logo for a photographer who offers photography services.",
      img: "/picture3.png",
      tags: ["Adobe Illustrator", "Branding", "Marketing"],
  },

  {
      id: 4,
      title: "Social Media Post Design",
      desc: "Show all the information about the brand, including the services they provide.",
      img: "/picture4.png",
      tags: ["Adobe Photoshop", "Branding", "Marketing"],
  }
]

const Projects = () => {
  return (
    <div id='projects' className='projects-container'  data-aos="zoom-in-right" >
      <Heading title='My Projects' />
      <div className='projects-grid projects-grid-xl prjoects-grid-md-2 projects-grid-lg-3 projects-center'>
       {data.map((el) => (<Card 
       key={el.id}
       title={el.title}
       desc={el.desc}
       img={el.img}
       tags={el.tags}


       />))}
      </div>
    </div>
  )
}

export default Projects
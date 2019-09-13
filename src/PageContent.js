import React from 'react'
import Project from './Project'
import './PageContent.css'

const projects = [
  {title:"Opener Dota", image: "/images/openerDota.png", link: "https://openerdota-swh.herokuapp.com/" },
  {title:"Drone Swarmy", image: "/images/drone.jpg", link: "https://www.youtube.com/watch?v=X7Zj_URf8R8&feature=youtu.be" },
  {title:"Car Cool", image: "/images/carcool.png", link: "https://makecarcool.herokuapp.com/" },
  {title:"Woods and Poole Webtool", image: "/images/WPexample.png", link: "https://www.woodsandpoole.com/data-lookup-tool/" },
  //{title:"Tetris Dots", image: "/images/SamHarrison.jpg", link: "#" },
  //{title:"Tetris Dots", image: "/images/SamHarrison.jpg", link: "#" }
]

function PageContent() {
  return (
    <div className = "projectsList">
      {projects.map((item) => {
        return <Project title={item.title} image={item.image} link={item.link} />
      })}
    </div>
  )
}

export default PageContent

import React from 'react'
import "./Project.css"
import { data } from '../Data'
import Card from './Card'

const Project = () => {
  return (
    <div className='project'>
        <div className="p-title">My Projects</div>
        <div className="p-desc">
            Have a look on my projects....
            <div class="loader">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
        </div>
        <div className="p-lists">
        {data.map((item)=>(
          <Card  key={item.id} i={item.img} link={item.link} title={item.title} desc={item.desc}/>
        ))}
        </div>
    </div>
  )
}

export default Project
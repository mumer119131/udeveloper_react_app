import React from 'react'
import './work.css'
import WORK_1 from '../../assets/building_2.png'
import WORK_2 from '../../assets/building_5.png'
import WORK_3 from '../../assets/building_3.png'
import WORK_4 from '../../assets/building_4.png'
import WORK_5 from '../../assets/building_1.png'
import WORK_6 from '../../assets/building_6.png'

const work_data = [
  {
    id : 1,
    img : WORK_1,
    name : "Restline Hotel",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, assumenda?"
  },{
    id : 2,
    img : WORK_2,
    name : "Restline Hotel",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, assumenda?"
  },{
    id : 3,
    img : WORK_3,
    name : "Restline Hotel",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, assumenda?"
  },{
    id : 4,
    img : WORK_4,
    name : "Restline Hotel",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, assumenda?"
  },{
    id : 5,
    img : WORK_5,
    name : "Restline Hotel",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, assumenda?"
  }
  ,{
    id : 6,
    img : WORK_6,
    name : "Restline Hotel",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, assumenda?"
  }
]
const Work = () => {
  return (
    <div className="container works__portion" id="work_portion">
            <small>Check our magnificant recent </small>
            <h2>Work</h2>
            <div className="works__container">
                {
                work_data.map(({id,img,name,description})=> {
                  return (
                    <div className="work__item__container" key={id}>
                      <div className="work__item">
                          <h4>{name}</h4>
                          <p>{description}</p>
                          <img src={img} alt="building_img" />
                      </div>
                  </div>
                  )
                })
              }
          </div>
    </div>
  )
}

export default Work
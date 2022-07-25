import React from 'react'
import './team.css'
import TEAM_IMG_1 from '../../assets/team_1.jpg'
import TEAM_IMG_2 from '../../assets/team_2.jpg'
import TEAM_IMG_3 from '../../assets/team_3.jpg'
import TEAM_IMG_4 from '../../assets/team_4.jpg'

const team_data = [
  {
    id : 1,
    img : TEAM_IMG_1,
    name : "David Will",
    job : "Senior Designer",
    email : "mumer119131@gmail.com",
  },{
    id : 2,
    img : TEAM_IMG_2,
    name : "Shim Lim",
    job : "Senior Designer",
    email : "mumer119131@gmail.com",
  },{
    id : 3,
    img : TEAM_IMG_3,
    name : "Tame Lee",
    job : "Senior Designer",
    email : "mumer119131@gmail.com",
  },{
    id : 4,
    img : TEAM_IMG_4,
    name : "Mill Dame",
    job : "Senior Designer",
    email : "mumer119131@gmail.com",
  }
]

const Team = () => {
  return (
    <div className="container team__portion" id="team_portion">
            <small>Meet our amazing collaborative</small>
            <h2>Team</h2>
            <div className="team__container">
                {
                  team_data.map(({id,img,name,job,email})=>{
                    return (
                      <div className="team__member__container" key={id}>
                    <img src={img} alt="team_member" />
                    <h2>{name}</h2>
                    <p>- {job} -</p>
                    <small>{email}</small>
                    <div className="team__btn__container">
                        <h4><a href={"mailto:" + email} className="message__btn">Message</a></h4>
                        <h4><a href="" className="more__btn">View More</a></h4>
                    </div>
                </div>
                    )
                  })
                }
            </div>
    </div>
  )
}

export default Team
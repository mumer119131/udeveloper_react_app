import React from 'react'
import './reviews.css'
import TEAM_IMG_1 from '../../assets/team_1.jpg'
import TEAM_IMG_2 from '../../assets/team_2.jpg'
import TEAM_IMG_3 from '../../assets/team_3.jpg'
import TEAM_IMG_4 from '../../assets/team_4.jpg'

const reviews_data = [
  {
    id : 1,
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat officia excepturi veniam laboriosam corporis, nisi accusamus libero alias quia est debitis id pariatur omnis! Reiciendis numquam enim omnis ab, doloremque modi! Vero ut similique placeat illum laborum molestias, repellendus, rem id veniam perspiciatis ullam sint natus dolores minima dolor.",
    img : TEAM_IMG_1,
    name : "Mr David",
    job : "CEO A Developers"
  },{
    id : 2,
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat officia excepturi veniam laboriosam corporis, nisi accusamus libero alias quia est debitis id pariatur omnis! Reiciendis numquam enim omnis ab, doloremque modi! Vero ut similique placeat illum laborum molestias, repellendus, rem id veniam perspiciatis ullam sint natus dolores minima dolor.",
    img : TEAM_IMG_2,
    name : "Mr David",
    job : "CEO A Developers"
  },{
    id : 3,
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat officia excepturi veniam laboriosam corporis, nisi accusamus libero alias quia est debitis id pariatur omnis! Reiciendis numquam enim omnis ab, doloremque modi! Vero ut similique placeat illum laborum molestias, repellendus, rem id veniam perspiciatis ullam sint natus dolores minima dolor.",
    img : TEAM_IMG_3,
    name : "Mr David",
    job : "CEO A Developers"
  },{
    id : 4,
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat officia excepturi veniam laboriosam corporis, nisi accusamus libero alias quia est debitis id pariatur omnis! Reiciendis numquam enim omnis ab, doloremque modi! Vero ut similique placeat illum laborum molestias, repellendus, rem id veniam perspiciatis ullam sint natus dolores minima dolor.",
    img : TEAM_IMG_4,
    name : "Mr David",
    job : "CEO A Developers"
  }
]
const Reviews = () => {
  return (
    <div className="container reviews__portion" id="review_portion">
            <small>Our Customers valuable</small>
            <h2>Reviews</h2>
            <div className="reviews__container">
                {
                  reviews_data.map(({id,description,img,name,job})=>{
                    return (
                      <div className="review__item" key={id}>
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    <p>{description}</p>
                    <div className="reviewer__content">
                        <img src={img} alt="" />
                        <div className="reviewer__desc">
                            <h4>{name}</h4>
                            <p>{job}</p>
                        </div>
                    </div>
                </div>
                    );
                  })
                }
            </div>
    </div>
  )
}

export default Reviews
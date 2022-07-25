import React from 'react'
import LGOO_IMG from '../../../assets/ud_logo_white.png'
import './content.css'
const Content = () => {
  return (
    <div className="header__content__container">
            <img src={LGOO_IMG} alt="" />
            <h2>U Developers</h2>
            <p>"Turning your dreams into real homes. Best construction experts in town. We are committed to build homes with superior quality. Leave your dream home construction upon our shoulders."</p>
            <div className="btn__container">
                <a href="#" className="btn btn__primary">Hire</a>
                <a href="#" className="btn">Learn more</a>
            </div>
        </div>
  )
}

export default Content
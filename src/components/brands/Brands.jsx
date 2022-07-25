import React from 'react'
import './brands.css'
import BRAND_1 from '../../assets/c_brand_1.png'
import BRAND_2 from '../../assets/c_brand_2.png'
import BRAND_3 from '../../assets/c_brand_3.png'
import BRAND_4 from '../../assets/c_brand_4.png'
import BRAND_5 from '../../assets/c_brand_5.png'
import BRAND_6 from '../../assets/c_brand_6.png'
const Brands = () => {
  return (
    <div class="container brands__portion">
            <small>Our pride and honourable partner</small>
            <h2>Brands</h2>
            <div class="brands__container">
                <img src={BRAND_1} alt="brand_logo" />
                <img src={BRAND_2} alt="brand_logo" />
                <img src={BRAND_3} alt="brand_logo" />
                <img src={BRAND_4} alt="brand_logo" />
                <img src={BRAND_5} alt="brand_logo" />
                <img src={BRAND_6} alt="brand_logo" />
            </div>

    </div>
  )
}

export default Brands
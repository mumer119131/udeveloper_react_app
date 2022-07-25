import React, { useEffect } from 'react'
import './gallery.css'
import BG_1 from '../../assets/bg_1.jpg'
import BG_2 from '../../assets/bg_2.jpg'
import BG_3 from '../../assets/bg_3.jpg'
import BG_4 from '../../assets/bg_4.jpg'

const bg_images = [BG_1, BG_2, BG_3, BG_4]

const Gallery = () => {
  useEffect(()=>{
        var left_btn = document.querySelector(".left__btn");
        var right_btn = document.querySelector(".right__btn");
        var gallery_portion = document.querySelector(".gallery__portion");
        var current_index = 0;
        left_btn.addEventListener("click",()=>{
            if(current_index > 1){
                current_index -= 1;
            }else{
                current_index = 4;
            }
            gallery_portion.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg_images[current_index-1]})`;
        });
        right_btn.addEventListener("click",()=>{
            if(current_index < 4){
                current_index += 1;
            }else{
                current_index = 1;
            }
            gallery_portion.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg_images[current_index-1]})`;
            
        });
  })
  return (
    <div className="container gallery__portion" id="gallery_portion">
            <small>Check out awesome projects in </small>
            <h2>Gallery</h2>
            <div className="navi__btn left__btn">
                <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="navi__btn right__btn">
                <i className="fa-solid fa-angle-right"></i>
            </div>
    </div>
  )
}

export default Gallery
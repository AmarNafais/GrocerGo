import React from 'react';
import './banner.css';
import VegetableImage from '../../Assets/Images/vegetables-img.png';

const Banner = () => (
    <div className="banner">
        <div className="banner-content">
            <h3>Fresh And Organic</h3>
            <h1>Upto 50% Off</h1>
            <button className="shop-now-btn">Shop Now</button>
        </div>
        <div className="banner-image">
            <img src={VegetableImage} alt="Green Bell Pepper" />
        </div>
        <div className="arrows">
            <button className="left-arrow">{"<"}</button>
            <button className="right-arrow">{">"}</button>
        </div>
    </div>
);

export default Banner;
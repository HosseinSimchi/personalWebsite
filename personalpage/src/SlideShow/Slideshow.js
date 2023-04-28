import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SlideShow = () => {

    const settings = {
        dots: true,
        // infinite: true,
        speed: 1000,
        // slidesToShow: 1,
        slidesToScroll: 1
    }
    const Numbers = [1,2]

    return (
        <>
        <Slider style={{width:"200px", marginLeft:"450px", border:"1px solid blue"}} {...settings}>
            {Numbers.map((item) => (
                <div>
                    <img  style={{ width: '100%'}} src="/assets/img/Image.jpg" alt="img"></img>
                </div>
            ))}
        </Slider>
        </>
    )
}

export default SlideShow;



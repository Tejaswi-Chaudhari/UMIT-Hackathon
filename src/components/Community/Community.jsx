import React from 'react'
import cp6 from './cp6.jpg'
import cp2 from './cp2.jpg'
import cp3 from './cp3.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Community = () => {
  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
  return(
    <div id="community" >
      <Carousel responsive={responsive} className="car-1">
        <div><img className="car-img" src={cp6} alt="slide" /></div>
        <div><img className="car-img" src={cp6} alt="slide" /></div>
        <div><img className="car-img" src={cp6} alt="slide" /></div>
        <div><img className="car-img" src={cp6} alt="slide" /></div>
        <div><img className="car-img" src={cp6} alt="slide" /></div>
        <div><img className="car-img" src={cp6} alt="slide" /></div>
      </Carousel>
    </div>
  )
}

export default Community
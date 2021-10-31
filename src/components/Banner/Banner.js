import React from 'react';
import img from '../../Logo/cover 1.jpg';
import img2 from '../../Logo/2.jpg';
import img3 from '../../Logo/cover2.jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            	<Carousel className="caro">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>The world is a book and those who do not travel read only one page</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Travel is  fatal to prejudice, bigotry, and narrow mindedness, and many of our people need it sorely on these accounts</h3>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
		
            
        </div>
    );
};

export default Banner;
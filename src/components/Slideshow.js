import Carousel from 'react-bootstrap/Carousel';

import Image from 'react-bootstrap/Image';
import Calculator from './images/Calculator.png';
import WordPress from './images/WordPress.png';
import TCounty from './images/TCounty.png';

function Slideshow() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image src={Calculator} text="Calculator" />
        <Carousel.Caption>
          <h3>React</h3>
          <p>Build a full functioning Calculator App using React.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={WordPress} text="WordPress" />
        <Carousel.Caption>
          <h3>Content Management System</h3>
          <p>Use various content management systems, including Word Press, to build websites.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={TCounty} text="TCounty" />
        <Carousel.Caption>
          <h3>Responsive Web Development</h3>
          <p>
            Use front stack languages like HTML, CSS, and Javascript to build mobile friendly websites. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slideshow;
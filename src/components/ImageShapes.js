import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import image4 from './images/image4.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import './ImageShapes.css';



function ImageShape() {
  return (
    <Container >
      <Row >
        <Col xs={6} md={4}>
          <Image id = 'image1RC' src={image4}  roundedCircle />
          < p class="text-lg-center">Problem Solving</p>
        </Col>
        <Col xs={6} md={4}>
          <Image id = 'image2RC' src={image2} roundedCircle />
          <p class="text-center">Developing</p>
        </Col>
        <Col xs={6} md={4}>
          <Image id = 'image3RC' src={image3} roundedCircle />
          <p class="text-center  ">Collaboration</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageShape;
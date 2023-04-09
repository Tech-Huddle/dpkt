import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
function HeaderCarousel() {
  return (

    <Carousel>
      <Carousel.Item>
        <img
        className="cropped-image"
          src="https://random.imagecdn.app/150/150"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
        className="cropped-image none-image"
          src="https://random.imagecdn.app/150/150"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
        className="cropped-image none-image"
          src="https://random.imagecdn.app/150/150"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeaderCarousel
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
function HeaderCarousel() {
  const cards = [
    {
      title: 'Card 1',
      text: 'This is the first card',
      image: 'https://random.imagecdn.app/150/150',
    },
    {
      title: 'Card 2',
      text: 'This is the second card',
      image: 'https://random.imagecdn.app/150/150',
    },
    {
      title: 'Card 3',
      text: 'This is the third card',
      image: 'https://random.imagecdn.app/150/150',
    },
    {
      title: 'Card 4',
      text: 'This is the fourth card',
      image: 'https://random.imagecdn.app/150/150',
    },
  ];
  return (
    <Carousel>{
      cards.map((card,i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={card.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })
      }


    </Carousel>
  );
}

export default HeaderCarousel
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AccreditionsPage() {
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
    <>
     <Container className='mt-3'>
                <Row xs={1} md={2} lg={4}>
                    {cards.map((card, index) => (
                        <Col key={index} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={card.image} />
                                <Card.Body>
                                    <Card.Title>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
    </>
  
  )
}

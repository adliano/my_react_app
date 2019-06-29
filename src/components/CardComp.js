import React from 'react'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'
// How to load img?

function CardComp() {
    return(
        <Card className='m-2'>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://ohspets.shelterbuddy.com/photos/lostfound/117175.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://d17fnq9dkz9hgj.cloudfront.net/uploads/2013/09/cat-black-superstitious-fcs-cat-myths-162286659.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Card>
    )
}

export default CardComp
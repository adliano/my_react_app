import React from 'react'
import Card from 'react-bootstrap/Card'

function CardComp (props) {
  return (
    <Card className='my-2'>
      <Card.Header>
        <h3>{props.header}</h3>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <p>
            Ad exercitation nostrud laboris magna eiusmod ex ipsum labore.
            Dolore ad commodo deserunt exercitation do culpa est cupidatat magna
            qui fugiat ad quis. Ut labore ad labore commodo sunt cupidatat duis
            dolore quis. In do esse irure amet. Esse cillum commodo cillum
            incididunt esse consequat non dolore velit est. Lorem officia do ut
            esse eu et. Ea ipsum est pariatur reprehenderit. Ullamco deserunt
            incididunt occaecat consectetur ipsum sint mollit adipisicing magna
            nulla. Et est est culpa velit esse dolore ut sint exercitation
            officia Lorem.
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardComp

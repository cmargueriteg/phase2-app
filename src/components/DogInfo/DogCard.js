import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



function DogCard({dog}) {

  return (

    <Row xs={1} md={4} className="g-4">
    {Array.from({ length: 1 }).map((_, idx) => (
      <Col>
        <Card>
          <Card.Img variant="top" src={dog.image} />
          <Card.Body>
            <Card.Title>{dog.name}</Card.Title>
            <Card.Text>
            <h5>{dog.age}</h5>
              <h5>{dog.Sex}</h5>
              <h5>{dog.breed}</h5>

            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>



    // <div>
    //   <img src = {dog.image} alt=""/> 
    //               <h2>{dog.name}</h2>
    //               <h5>{dog.age}</h5>
    //               <h5>{dog.Sex}</h5>
    //               <h5>{dog.breed}</h5>

    // </div>
  )
}

export {DogCard}

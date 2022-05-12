import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { ShoppingCartSimple } from  "phosphor-react"

export function CardProduct(props) {
  const PONTOS= 0;
  const {image, name, price, pontos} = props;

  return(
    <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={image} />
      {/* <Card.Body>
        
      </Card.Body> */}
      <div className="card-content">
        <ListGroup className="list-group-flush">
          <list-group-item>
          <Card.Title>{name}</Card.Title>
          </list-group-item>
          <ListGroupItem>{`$${price},00`}</ListGroupItem>
          <ListGroupItem>
            {`Bônus da compra: ${pontos === null ? PONTOS : pontos} pontos`}
          </ListGroupItem>
          <Button variant="outline-primary">
            <ShoppingCartSimple size={25} />      Comprar
          </Button>
        </ListGroup>
      </div>
    </Card>
  )
}
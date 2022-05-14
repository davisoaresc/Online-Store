import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Coins, CurrencyEth, ShoppingCartSimple } from  "phosphor-react"
import { updateUserCoinsPts } from "../Helpers/fetchApi";

export function CardProduct(props) {
  const PONTOS= 0;
  const {image, name, moedas, pontos} = props;

  async function handleUserPurchase() {
    const localStorageItem = JSON.parse(localStorage.getItem('user'));
    const api = await updateUserCoinsPts(localStorageItem.userName, pontos, moedas);
    console.log(api);
    const data = await api.json();
    return alert(`Status ${api.status}: ${data.message}`)
  }

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
          <ListGroupItem><Coins size={22} />{`  ${moedas},00`}</ListGroupItem>
          <ListGroupItem>
            {`Bônus da compra: `}
            <CurrencyEth size={22} />
            {`  ${pontos === null ? PONTOS : pontos}`}
          </ListGroupItem>
          <Button
            type="button"
            onClick={handleUserPurchase}
            variant="outline-primary"
          >
            <ShoppingCartSimple size={25} />      Comprar
          </Button>
        </ListGroup>
      </div>
    </Card>
  )
}
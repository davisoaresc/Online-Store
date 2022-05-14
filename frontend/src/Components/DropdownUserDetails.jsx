import { Navbar, Container, Nav, NavDropdown, Modal, Form, Button, FloatingLabel} from "react-bootstrap";
import { Coins, CreditCard, CurrencyEth, User } from "phosphor-react";
import { useState } from "react";
import { userBuyingCoins } from "../Helpers/fetchApi";

export function DropdownUserDetails(props) {
  const [show, setShow] = useState(false);
  const [moedas, setMoedas] = useState('');


  async function handleUserBuyingCoins() {
    const localStorageItem = JSON.parse(localStorage.getItem('user'));
    const api = await userBuyingCoins(localStorageItem.userName, moedas);
    const data = await api.json();
    handleClose();
    return alert(`Status ${api.status}: ${data.message}`)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="drop-down-costum">
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Collapse id="navbar-dark-example">
            <Nav>
            <User size={35} />
              <NavDropdown
                id="nav-dropdown-dark-example"
                menuVariant="dark"
              >
                <div className="container-user-details">
                  <p><User size={20} />{`  ${props.user}`}</p>  
                  <p> <CurrencyEth size={20} />{`  ${props.pontos}`}</p>
                  <p> <Coins size={20} /> {`  ${props.moedas},00`}</p> 
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={handleShow}
                >
                  <Coins size={20} /> Comprar Moedas
                </NavDropdown.Item>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Comprar Moedas</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Label><CreditCard size={25} />
                        {`  Método de pagamento`}
                      </Form.Label>
                        <FloatingLabel controlId="floatingSelect" label="Works with selects">
                          <Form.Select aria-label="Floating label select example">
                            <option> Cartão de crédito</option>
                            <option>Cartão de debito</option>
                            <option>Bitcoin</option>
                            <option>Ethereum</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label><Coins size={25} />{`  Quantidade de Moedas`}</Form.Label>
                        <Form.Control 
                          type="text"
                          onChange={(e) => setMoedas(e.target.value)} 
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={handleClose}
                    >
                      Fechar
                    </Button>
                    <Button 
                      onClick={handleUserBuyingCoins}
                      type="submit"
                      variant="primary"
                    >
                      Comprar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { User } from "phosphor-react";

export function WidgetUserDetails(props) {
  const PONTOS = "Pontos: 0"
  const MOEDAS = "Moedas: 0"

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
          <User size={35} />
            <NavDropdown
              id="nav-dropdown-dark-example"
              // title= {props.user}
              menuVariant="dark"
            >
            <div className="container-user-details">
              <p>{props.user}</p>  
              <p>{props.email}</p>
              <p>{props.pontos === null ? PONTOS : props.pontos}</p>
              <p>{props.moedas === null ? MOEDAS : props.moedas}</p> 
            </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
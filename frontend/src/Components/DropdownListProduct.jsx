import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ListPlus } from "phosphor-react";
import { ModalAddProduct } from "./ModalAddProduct";

export function DropDownListProdusct () {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <button 
              type="button"
              className="btn-list-products"
              
            >
              <ListPlus size={37} />
            </button>
            <NavDropdown
              id="nav-dropdown-dark-example"
              // title= {props.user}
              menuVariant="dark"
            >
              <ModalAddProduct/>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
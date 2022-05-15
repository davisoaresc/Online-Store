import { Form, Modal, NavDropdown } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useContext, useState } from "react";
import Context from "../Context/Context";
import { createProductApi } from "../Helpers/fetchApi";
import { Plus } from "phosphor-react";

export function ModalAddProduct() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [pontos, setPontos] = useState('');

  const { token } = useContext(Context);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    try {
      const createProduct = await createProductApi(token, name, price, image, pontos)  
      const data = await createProduct.json();
      console.log(pontos)
      handleClose()
      alert('Produto cadastrado com sucesso');
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <NavDropdown.Item 
        href="#action/3.1"
        onClick={handleShow}
      ><Plus size={20} />
           Cadastrar Produto
      </NavDropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Novo Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nome do Produto</Form.Label>
              <Form.Control 
                type="text"
                onChange={(e) => setName(e.target.value)} 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Preço</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setPrice(e.target.value)} 
                />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Url da imagem</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setImage(e.target.value)} 
                />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Pontos</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setPontos(e.target.value)} 
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
          >
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

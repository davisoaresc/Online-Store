import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Context from "../Context/Context";
import { createUserApi } from '../Helpers/fetchApi';
// import { FormRegisterProduct } from "./FormRegisterProduct";
// import { FormRegisterUser } from "./FormRegisterUser";

export function ModalCreateUser () {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useContext(Context);

  console.log(user);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async () => {
    try {
      const createUser = await createUserApi(user, email, password)  
      const data = await createUser.json();
      alert(`${createUser.status}: ${data.message}`);
      handleClose();
    }
    catch(err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Button 
        className="button-login" 
        variant="outline-secondary"
        onClick={handleShow} 
      >
        Criar Conta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Usuário</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUser(e.target.value)} 
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  type="email"
                  onChange={(e) => setEmail(e.target.value)} 
                />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)} 
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button 
            type="submit"
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
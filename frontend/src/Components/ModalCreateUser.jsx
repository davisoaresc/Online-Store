import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FormRegisterProduct } from "./FormRegisterProduct";
import { FormRegisterUser } from "./FormRegisterUser";

export function ModalCreateUser () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <FormRegisterUser />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
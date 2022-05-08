import { Modal } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { GrAdd } from 'react-icons/gr';
import { FormRegisterProduct } from "./FormRegisterProduct";

export function ModalAddProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button 
        type="button"
        className="button-add"
        onClick={handleShow}
        >
          <GrAdd size={ 30 } className="react-icons-add"/>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastrar Novo Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormRegisterProduct />
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

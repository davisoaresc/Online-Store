import { Form } from "react-bootstrap";

export function FormRegisterProduct() {
  return(
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome do Produto</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Preço</Form.Label>
          <Form.Control type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" >
          <Form.Label>Url da imagem</Form.Label>
          <Form.Control type="text"/>
      </Form.Group>
    </Form>
  )
  
}
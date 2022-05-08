import { Form } from "react-bootstrap";

export function FormRegisterUser() {
  return(
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Usuário</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Email</Form.Label>
          <Form.Control type="password"/>
      </Form.Group>

      <Form.Group className="mb-3" >
          <Form.Label>Senha</Form.Label>
          <Form.Control type="text"/>
      </Form.Group>
    </Form>
  )
}
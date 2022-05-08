import { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ModalCreateUser } from '../Components/ModalCreateUser';
import Context from '../Context/Context';

import '../Styles/Login.css'

export function Login() {

  const { user, setUser } = useContext(Context);

  return (
    <div className="login-forms">
      <Form className="form">
        <div>
          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>Usuário</Form.Label>
            <Form.Control
              type="text"
              value={ user }
              onChange = { ({target}) => setUser(target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="text"/>
          </Form.Group>
          <div className="d-grid gap-2">
            <ModalCreateUser />
            <Link to="/">
              <Button className="button-login"  type="submit" variant="primary">Entrar</Button>
            </Link>        
          </div>
        </div>
      </Form>
    </div>
  );

} 

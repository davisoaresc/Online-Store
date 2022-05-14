import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ModalCreateUser } from '../Components/ModalCreateUser';
import Context from '../Context/Context';
import { loginApi } from '../helpers/fetchApi';

import '../Styles/Login.css'

export function Login() {
  let navigate = useNavigate();
  const [password, setPassword] = useState('');
  const { user, setUser, setToken } = useContext(Context);

  

  async function handleSubmit () {
    const api = await loginApi(user, password);
    const data = await api.json();
    const userData = {
      userName: user, 
      token: data.token,
    }
    if (!data.token) {
      return alert(`Erro ${api.status}: ${data.message}`)
    }
    localStorage.setItem('user', JSON.stringify(userData));
    setToken(data.token);

    navigate('/home')
    
    return
  }

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
              <Form.Control
                type="password"
                onChange = { ({target}) => setPassword(target.value)}
              />
          </Form.Group>
          <div className="d-grid gap-2">
            <ModalCreateUser />
            <Button 
              className="button-login"
              type="button"
              variant="primary"
              onClick={handleSubmit}
            >
                Entrar
              </Button>
          </div>
        </div>
      </Form>
    </div>
  );

} 

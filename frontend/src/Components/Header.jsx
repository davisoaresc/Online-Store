import { useEffect, useState } from 'react';
import { SignOut, ShoppingBagOpen, DesktopTower } from "phosphor-react";
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import { WidgetUserDetails } from './WidgetUserDetails';
import { DropDownListProdusct } from './DropdownListProduct';
import { getUserByUsername } from '../Helpers/fetchApi';

export function Header() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pontos, setPontos] = useState('');
  const [moedas, setMoedas] = useState('');

  function handleClick() {
    localStorage.clear();
  }

  async function getItemLocalStorage() {
    const localStorageItem = await JSON.parse(localStorage.getItem('user'));
    setUser(localStorageItem.userName);
    const data = await getUserByUsername(localStorageItem.token, localStorageItem.userName);
    setEmail(data.email)
    setPontos(data.pontos)
    setMoedas(data.moedas)
  }

  useEffect(() => {
    getItemLocalStorage();
  }, []);

  return (
    <header className="header">
      <div className="wallet-infos-header">
        <span><DesktopTower size={55} /> </span>
      </div>

      <div className="user-container">

        { user === "admin"  && <DropDownListProdusct/> }

        <WidgetUserDetails
          user={ user }
          email={email}
          pontos={pontos}
          moedas={moedas}       
        />
        <Link 
          to={"/login"}
          onClick={handleClick}
        >
          <SignOut size={35} color="white"/>
        </Link>
      </div>

    </header>
  )
}
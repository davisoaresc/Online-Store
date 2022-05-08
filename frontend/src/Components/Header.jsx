import { useContext } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import Context from '../Context/Context';
import '../Styles/Header.css';
import { ModalAddProduct } from './ModalAddProduct';

export function Header() {
  const { user } = useContext(Context);
  return (
    <header className="header">
      <div className="wallet-infos-header">
        <span><BiShoppingBag size={45} className="react-icons"/> </span>
      </div>
      <div className="user-container">
        { user === "admin"  && <ModalAddProduct /> }
        <span><CgProfile size={ 40 } className="react-icons"/></span>
        <p className="user">{user}</p>
      </div>
    </header>
  )
}
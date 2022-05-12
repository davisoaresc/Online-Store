import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

export default function ContextProvider({ children }) {
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  const [products, setProducts] = useState([]);

  const contextValue = {
    user,
    setUser,
    token,
    setToken,
    products,
    setProducts
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
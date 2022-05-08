import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

export default function ContextProvider({ children }) {
  const [user, setUser] = useState('');

  const contextValue = {
    user,
    setUser,
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
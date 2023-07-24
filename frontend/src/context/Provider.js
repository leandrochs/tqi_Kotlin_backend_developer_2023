import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [userName, setUserName] = useState('');

  const contextValue = useMemo(
    () => ({
      userName,
      setUserName,

    }),
    [userName],
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;
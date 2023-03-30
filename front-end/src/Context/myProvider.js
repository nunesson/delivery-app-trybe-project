// import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import Context from './myContext';

function Provider({ children }) {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [stateBtn, setStateBtn] = useState(true);
  const [errorStatus, setErrorStatus] = useState(false);

  const listData = useMemo(
    () => ({ newUser, setNewUser, stateBtn, setStateBtn, errorStatus, setErrorStatus }),
    [newUser, stateBtn, errorStatus],
  );
  return <Context.Provider value={ listData }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export default Provider;

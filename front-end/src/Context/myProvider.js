// import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import Context from './myContext';

function Provider({ children }) {
  const listData = useMemo(() => ({}), []);
  return (
    <Context.Provider value={ listData }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export default Provider;

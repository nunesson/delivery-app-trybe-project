// import React, { useEffect, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import { genericRoutes } from '../Axios/AxiosRoutes';
import Context from './myContext';

function Provider({ children }) {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [stateBtn, setStateBtn] = useState(true);
  const [errorStatus, setErrorStatus] = useState(false);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sellers, setSellers] = useState([]);
  const [orders, setOrders] = useState({});

  const getSellers = async () => {
    const { data } = await genericRoutes('seller', 'get');
    setSellers(data);
    setOrders({ sellerId: data[0].id });
    return sellers;
  };

  useEffect(() => getSellers(), []);

  const listData = useMemo(
    () => ({
      newUser,
      setNewUser,
      stateBtn,
      setStateBtn,
      errorStatus,
      setErrorStatus,
      products,
      setProducts,
      totalPrice,
      setTotalPrice,
      sellers,
      setSellers,
      orders,
      setOrders,
      getSellers,
    }),
    [newUser, stateBtn, errorStatus, products, totalPrice, sellers, orders, getSellers],
  );
  return <Context.Provider value={ listData }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.func,
}.isRequired;

export default Provider;

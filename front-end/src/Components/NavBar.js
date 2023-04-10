import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage, removeLocalStorage } from '../LocalStorage/localStorage';

function NavBar() {
  const [userName, setUserName] = useState('');
  const history = useHistory();
  const { role } = getLocalStorage('user');

  useEffect(() => { setUserName(getLocalStorage('user').name); }, []);

  const onClickLogout = () => {
    removeLocalStorage('user');
    history.push('/login');
  };

  const onClickProducts = () => {
    history.push('/customer/products');
  };

  const onClickOrders = () => {
    history.push(`/${role}/orders`);
  };

  return (
    <div className="products">
      <button
        type="button"
        onClick={ onClickProducts }
        data-testid="customer_products__element-navbar-link-products"
      >
        Produtos
      </button>
      <button
        type="button"
        onClick={ onClickOrders }
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </button>
      <h1
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {userName}
      </h1>
      <button
        type="button"
        onClick={ onClickLogout }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </button>
    </div>
  );
}

export default NavBar;

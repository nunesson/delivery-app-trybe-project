import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage, removeLocalStorage } from '../LocalStorage/localStorage';

function NavBar() {
  const [userName, setUserName] = useState('');
  const history = useHistory();

  useEffect(() => { setUserName(getLocalStorage('user').name); }, []);

  const onClickLogout = () => {
    removeLocalStorage('user');
    history.push('/login');
  };

  return (
    <div className="products">
      <h1 data-testid="customer_products__element-navbar-link-products">Produtos</h1>
      <h1 data-testid="customer_products__element-navbar-link-orders">Meus Pedidos</h1>
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

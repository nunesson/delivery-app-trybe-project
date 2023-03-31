import React from 'react';

function NavBar() {
  return (
    <div className="products">
      <h1 data-testid="customer_products__element-navbar-link-products">Produtos</h1>
      <h1 data-testid="customer_products__element-navbar-link-orders">Meus Pedidos</h1>
      <h1 data-testid="customer_products__element-navbar-user-full-name">Nome</h1>
      <h1 button="customer_products__element-navbar-link-logout">Sair</h1>
    </div>
  );
}

export default NavBar;

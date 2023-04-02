import React from 'react';
import OrdersTable from '../Components/OrdersTable';
import OrdersTableBody from '../Components/OrdersTableBody';

function CustomerOrdersDetails() {
  return (
    <div>
      <OrdersTable />
      { /* Passar os props Id, name, date, status e index atraves de um map */}
      <OrdersTableBody />
      { /* Fazer um map e passar os props Index, quantity, price e subtotal */}
      <h1>{`Total: R$${total}`}</h1>
    </div>
  );
}

export default CustomerOrdersDetails;

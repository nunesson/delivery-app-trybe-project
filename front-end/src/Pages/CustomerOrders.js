import React from 'react';
import OrderCard from '../Components/OrderCard';

function CustomerOrders() {
  return (
    <div>
      <OrderCard />
      { /* Passar os props Id, Price, Status e date atraves de um map */}
    </div>
  );
}

export default CustomerOrders;

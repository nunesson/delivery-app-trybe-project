import React from 'react';
import CheckoutDetails from '../Components/CheckoutDetails';
import CheckoutTable from '../Components/CheckoutTable';
import NavBar from '../Components/NavBar';

function Checkout() {
  return (
    <div>
      <NavBar />
      <CheckoutTable />
      <CheckoutDetails />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Checkout;

import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ id, status, date, price }) {
  return (
    <div>
      <p data-testid={ `customer_orders__element-order-id-${id}` }>{id}</p>
      <h1
        data-testid={ `customer_orders__element-delivery-status-id-${id}` }
      >
        {status}
      </h1>
      <p data-testid={ `customer_orders__element-card-price-id-${id}` }>{date}</p>
      <p>{price}</p>
    </div>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default OrderCard;

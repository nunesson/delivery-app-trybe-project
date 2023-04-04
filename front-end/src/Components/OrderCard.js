import React from 'react';
import PropTypes from 'prop-types';

function OrderCard({ id, status, saleDate, totalPrice }) {
  return (
    <div>
      <p data-testid={ `customer_orders__element-order-id-${id}` }>{id}</p>
      <p data-testid={ `customer_orders__element-delivery-status-id-${id}` }>
        {status}
      </p>
      <p data-testid={ `customer_orders__element-order-date-${id}` }>{saleDate}</p>
      <p data-testid={ `customer_orders__element-card-price-id-${id}` }>{totalPrice}</p>
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

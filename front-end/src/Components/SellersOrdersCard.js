import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SellersOrdersCard({
  id,
  status,
  saleDate,
  totalPrice,
  deliveryAddress,
  deliveryNumber }) {
  const formatedDate = (data) => {
    const fullDate = new Date(data);
    const date = fullDate.getDate();
    const month = fullDate.getMonth();
    const year = fullDate.getFullYear();

    if (`${date}`.length === 1 && `${month}`.length === 1) {
      return `0${date}/0${month + 1}/${year}`;
    }

    if (`${date}`.length === 1) {
      return `0${date}/${month + 1}/${year}`;
    }

    if (`${month}`.length === 1) {
      return `${date}/0${month + 1}/${year}`;
    }
  };

  return (
    <Link to={ `/seller/orders/${id}` }>
      <div>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>{id}</p>
        <p data-testid={ `seller_orders__element-delivery-status-${id}` }>
          {status}
        </p>
        <p data-testid={ `seller_orders__element-order-date-${id}` }>
          {
            formatedDate(saleDate)
          }
        </p>
        <p data-testid={ `seller_orders__element-card-price-${id}` }>
          {`${totalPrice}`.replace('.', ',')}
        </p>
        <p data-testid={ `seller_orders__element-card-address-${id}` }>
          {
            `${deliveryAddress}, ${deliveryNumber}`
          }
        </p>
      </div>
    </Link>
  );
}

SellersOrdersCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default SellersOrdersCard;

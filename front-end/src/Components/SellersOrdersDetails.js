import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SellersOrdersCard({
  id,
  status,
  saleDate,
  totalPrice,
  qtd,
  priceUnit,
}) {
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
        <p
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          {id}

        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-delivery-status"
        >
          {status}

        </p>
        <p
          data-testid="seller_order_details__element-order-details-label-order-date"
        >
          {formatedDate(saleDate)}

        </p>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          disabled={ validStatus(status) }
        >
          Preparar Pedido

        </button>

        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled="true"
        >
          Saiu para entrega
        </button>

        <p
          data-testid={ `seller_order_details__element-order-table-item-number-${id}` }
        />
        <p data-testid={ `seller_order_details__element-order-table-name-${id}` } />
        <p data-testid={ `seller_order_details__element-order-table-quantity-${id}` } />
        <p data-testid={ `seller_order_details__element-order-table-unit-price-${id}` } />
        <p data-testid={ `seller_order_details__element-order-table-sub-total-${id}` }>
          {
            qtd * priceUnit
          }
        </p>
        <p data-testid="seller_order_details__element-order-total-price">
          {`${totalPrice}`.replace('.', ',')}
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

import React from 'react';
import PropTypes from 'prop-types';

function OrdersTable({ id, name, date, status, index }) {
  return (
    <table>
      <thead>
        <tr>
          <th
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`Pedido ${id}`}
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {name}
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {date}
          </th>
          <th
            data-testid={ `customer_order_details_
            _element-order-details-label-delivery-status${index}` }
          >
            {status}
          </th>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
          >
            MARCAR COMO ENTREGUE
          </button>
        </tr>
      </thead>
    </table>
  );
}

OrdersTable.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.string,
  status: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default OrdersTable;

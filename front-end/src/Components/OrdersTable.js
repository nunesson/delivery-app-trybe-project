import React from 'react';
import PropTypes from 'prop-types';

function OrdersTable({ id, name, saleDate, status }) {
  const dTStatus = 'customer_order_details__element-order-details-label-delivery-status';
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
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {name}
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {saleDate}
          </th>
          <th
            data-testid={ dTStatus }
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

import React from 'react';
import PropTypes from 'prop-types';

function OrdersTableBody({ index, name, quantity, price, subtotal }) {
  return (
    <tbody>
      <td
        data-testid={
          `customer_order_details__element-order-table-item-number-${index}`
        }
      >
        {index + 1}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-name-${index}`
        }
      >
        {name}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-quantity-${index}`
        }
      >
        {quantity}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-unit-price-${index}`
        }
      >
        {`${price}`.replace('.', ',')}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-sub-total-${index}`
        }
      >
        {`${subtotal}`.replace('.', ',')}
      </td>
    </tbody>
  );
}

OrdersTableBody.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  subtotal: PropTypes.number,
}.isRequired;

export default OrdersTableBody;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../Context/myContext';

function OrdersTable({ id, sellerId, saleDate, status }) {
  const { sellers } = useContext(Context);

  const sellerName = () => {
    if (sellers.length !== 0 && sellerId) {
      const seller = sellers.find((s) => s.id === sellerId);

      console.log(seller);

      return seller.name;
    }

    return '';
  };

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
            { sellerName() }
          </th>
          <th
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { formatedDate(saleDate) }
          </th>
          <th
            data-testid={ dTStatus }
          >
            {status}
          </th>
          <button
            type="button"
            disabled={ status === 'Pendente' }
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

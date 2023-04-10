import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { genericRoutes } from '../Axios/AxiosRoutes';
import Context from '../Context/myContext';

function SellersOrdersCard({ id, status, saleDate, totalPrice, products }) {
  const { setUpdate, setUpdate2 } = useContext(Context);
  const sod = 'seller_order_details';
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

  const handlePrepareButton = () => {
    genericRoutes(`sales/orders/${id}`, 'put', { status: 'Preparando' });
    setUpdate(true);
    setUpdate2(false);
  };

  const handleDeliveryBtn = () => {
    genericRoutes(`sales/orders/${id}`, 'put', { status: 'Em Trânsito' });
    setUpdate2(true);
  };

  return (
    <div>
      <p data-testid="seller_order_details__element-order-details-label-order-id">
        {id}
      </p>
      <p data-testid={ `${sod}__element-order-details-label-delivery-status` }>
        {status}
      </p>
      <p data-testid="seller_order_details__element-order-details-label-order-date">
        {formatedDate(saleDate)}
      </p>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        disabled={ status !== 'Pendente' }
        onClick={ handlePrepareButton }
      >
        Preparar Pedido
      </button>

      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        disabled={ status !== 'Preparando' }
        onClick={ handleDeliveryBtn }
      >
        Saiu para entrega
      </button>
      { products[0]?.products?.map((ele, index) => (
        <div key={ index }>
          <p data-testid={ `${sod}__element-order-table-item-number-${id}` }>
            {index + 1}
          </p>
          <p
            data-testid={ `seller_order_details__element-order-table-name-${id}` }
          >
            {ele.name}
          </p>
          <p
            data-testid={ `seller_order_details__element-order-table-quantity-${id}` }
          >
            {ele.salesProducts.quantity}
          </p>
          <p
            data-testid={ `seller_order_details__element-order-table-unit-price-${id}` }
          >
            {ele.price.replace('.', ',')}
          </p>
          <p
            data-testid={ `seller_order_details__element-order-table-sub-total-${id}` }
          >
            {(ele.price * ele.salesProducts.quantity).toFixed(2).replace('.', ',')}
          </p>
        </div>
      ))}
      <p data-testid="seller_order_details__element-order-total-price">
        {`${totalPrice}`.replace('.', ',')}
      </p>
    </div>
  );
}

SellersOrdersCard.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default SellersOrdersCard;

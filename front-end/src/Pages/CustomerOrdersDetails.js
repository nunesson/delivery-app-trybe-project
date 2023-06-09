import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { genericRoutes } from '../Axios/AxiosRoutes';
import OrdersTable from '../Components/OrdersTable';
import OrdersTableBody from '../Components/OrdersTableBody';
import NavBar from '../Components/NavBar';
import Context from '../Context/myContext';

function CustomerOrdersDetails(props) {
  const [orders, setOrders] = useState([]);
  const { update3 } = useContext(Context);

  const getOrders = async (id) => {
    const { data } = await genericRoutes(`sales/products/${id}`, 'get');

    setOrders(data[0]);
  };

  useEffect(() => {
    const { match: { params: { id } } } = props;
    getOrders(id);
  }, [update3]);

  return (
    <div>
      <NavBar />
      <OrdersTable
        id={ orders?.id }
        sellerId={ orders?.sellerId }
        saleDate={ orders?.saleDate }
        status={ orders?.status }
      />
      { /* Passar os props Id, name, date, status e index atraves de um map */}
      {
        orders?.products?.map((order, index) => (
          <OrdersTableBody
            key={ index }
            index={ index }
            name={ order.name }
            quantity={ order.salesProducts.quantity }
            price={ order.price }
            subtotal={ (Number(order.salesProducts.quantity) * order.price).toFixed(2) }
          />
        ))
      }
      { /* Fazer um map e passar os props Index, quantity, price e subtotal */}
      <h1 data-testid="customer_order_details__element-order-total-price">
        {
          `Total: R$${orders?.totalPrice}`.replace('.', ',')
        }
      </h1>
    </div>
  );
}

CustomerOrdersDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default CustomerOrdersDetails;

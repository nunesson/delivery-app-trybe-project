import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../Components/NavBar';
import SellersOrdersDetails from '../Components/SellersOrdersDetails';
import { genericRoutes } from '../Axios/AxiosRoutes';
import Context from '../Context/myContext';

function SellerOrdersDetails(props) {
  const { update, update2 } = useContext(Context);
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const getSales = async () => {
    const { data } = await genericRoutes('sales', 'get');

    if (sales) {
      setSales(data);
      return sales;
    }
  };

  const getSalesProducts = async (id) => {
    const { data } = await genericRoutes(`sales/products/${id}`, 'get');
    setProducts(data);
    return products;
  };

  useEffect(() => {
    const { match: { params: { id } } } = props;
    getSales();
    getSalesProducts(id);
  }, [update, update2]);

  return (
    <div>
      <NavBar />
      {sales.map((sale) => (
        <SellersOrdersDetails
          key={ sale.id }
          id={ sale.id }
          status={ sale.status }
          saleDate={ sale.saleDate }
          totalPrice={ sale.totalPrice }
          products={ products }

        />
      ))}
    </div>
  );
}

SellerOrdersDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default SellerOrdersDetails;

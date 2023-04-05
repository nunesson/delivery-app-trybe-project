import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import SellersOrdersDetails from '../Components/SellersOrdersDetails';
import { genericRoutes } from '../Axios/AxiosRoutes';

function SellerOrdersDetails() {
  const [sales, setSales] = useState([]);

  const getSales = async () => {
    const { data } = await genericRoutes('sales', 'get');

    if (sales) {
      setSales(data);
      return sales;
    }
  };

  useEffect(() => {
    getSales();
  }, []);

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
          qtd={ sale.qtd }
          priceUnit={ sale.priceUnit }

        />
      ))}
    </div>
  );
}

export default SellerOrdersDetails;

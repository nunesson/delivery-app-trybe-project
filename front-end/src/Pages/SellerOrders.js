import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import SellersOrdersCard from '../Components/SellersOrdersCard';
import { genericRoutes } from '../Axios/AxiosRoutes';

function SellerOrders() {
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
        <SellersOrdersCard
          key={ sale.id }
          id={ sale.id }
          status={ sale.status }
          saleDate={ sale.saleDate }
          totalPrice={ sale.totalPrice }
          deliveryAddress={ sale.deliveryAddress }
          deliveryNumber={ sale.deliveryNumber }

        />
      ))}
    </div>
  );
}

export default SellerOrders;

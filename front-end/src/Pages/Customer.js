import React, { useContext, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Context from '../Context/myContext';
import { genericRoutes } from '../Axios/AxiosRoutes';
import Cards from '../Components/Cards';

function Customer() {
  const { products, setProducts } = useContext(Context);

  const getProducts = async () => {
    const { data } = await genericRoutes('products', 'get');
    setProducts(data);
    return products;
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      {products.map((ele) => (
        <Cards
          key={ ele.id }
          name={ ele.name }
          price={ ele.price }
          urlImage={ ele.urlImage }
        />
      ))}
    </div>
  );
}

export default Customer;

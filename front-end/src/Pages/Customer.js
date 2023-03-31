import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Context from '../Context/myContext';
import { genericRoutes } from '../Axios/AxiosRoutes';
import Cards from '../Components/Cards';

function Customer() {
  const { products, setProducts, totalPrice } = useContext(Context);

  const [redirectState, setRedirectState] = useState(false);

  const getProducts = async () => {
    const { data } = await genericRoutes('products', 'get');
    setProducts(data);
    return products;
  };

  const handleClick = () => {
    setRedirectState(true);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      {products.map((ele) => (
        <Cards
          id={ ele.id }
          key={ ele.id }
          name={ ele.name }
          price={ ele.price }
          urlImage={ ele.urlImage }
        />
      ))}
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ handleClick }
        disabled={ totalPrice === '0.00' || totalPrice === 0 }
      >
        <p data-testid="customer_products__checkout-bottom-value">
          { `${totalPrice}`.replace('.', ',') }
        </p>
      </button>
      {redirectState && <Redirect to="/customer/checkout" />}
    </div>
  );
}

export default Customer;

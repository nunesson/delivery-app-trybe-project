import React from 'react';
import PropTypes from 'prop-types';

export default function Cards({ name, price, urlImage, id }) {
  return (
    <div>
      <div className="cards">
        <img
          src={ urlImage }
          alt={ name }
          width="50px"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
        <h2 data-testid={ `customer_products__element-card-title-${id}` }>
          {name}
        </h2>
        <h3 data-testid={ `customer_products__element-card-price-${id}` }>{price}</h3>
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
        <input
          type="number"
          name="quantity"
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
      </div>
    </div>
  );
}

Cards.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  urlImage: PropTypes.string,
  id: PropTypes.number,
}.isRequired;

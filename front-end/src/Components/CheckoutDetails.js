import React from 'react';

function CheckoutDetails() {
  return (
    <div>
      <h1>Detalhes e Endereço para Entrega</h1>
      <label htmlFor="seller">
        P. Vendedora Responsável
        <select
          id="seller"
          data-testid="customer_checkout__select-seller"
        >
          <option>
            seller1
          </option>
        </select>
      </label>
      <br />
      <label htmlFor="address">
        Endereço:
        <input
          type="text"
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        Número:
        <input
          type="number"
          data-testid="customer_checkout__input-address-number"
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

export default CheckoutDetails;

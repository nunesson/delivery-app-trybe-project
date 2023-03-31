import React from 'react';

export default function Cards({ name, price, urlImage }) {
  return (
    <div>
      <div className="cards">
        <img src={ urlImage } alt={ name } width="50px" />
        <h2>
          {name}
        </h2>
        <h3>{price}</h3>

      </div>
    </div>
  );
}

import React, { useContext, useEffect } from 'react';
import './cardProduct.css';
import Context from '../../context/Context';

export default function CardProduct({ product }) {
  const { product_id, image, name, unit_of_measure, unit_price, quantity } = product;
  const {cart, setCart} = useContext(Context);

  function addToCart() {
    if (!cart.some(item => item.product_id === product_id)) {
      setCart([...cart, product]);
    }
  }

  useEffect(() => console.log(cart), [cart])

  return (
    <div className="card-container">
      <div id='image-container'>
        <img src={image} alt="new" />
      </div>
      <section className='card-section-text'>
        <div id='text-container'>
          <div>{name}</div>
          <div>{unit_of_measure}</div>
          <div>R$ {unit_price}</div>
          <div>{quantity} {quantity > 1 ? `disponíveis` : `disponível`}</div>
        </div>
        <div id='button-container'>
          <button
          type='button'
          onClick={addToCart}
          disabled={!quantity}
          >
            SELECIONAR
          </button>
        </div>
      </section>
    </div>
  );
}

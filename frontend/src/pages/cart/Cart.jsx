import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Context from '../../context/Context';
import './cart.css';

export default function Cart() {
  const { cart, setCart } = useContext(Context);
  const [buyQuantities, setBuyQuantities] = useState(cart.map(() => 1));

  function handleQuantityChange(index, value) {
    const newQuantities = [...buyQuantities];
    newQuantities[index] = value;
    setBuyQuantities(newQuantities);
    console.log(buyQuantities);
  }

  function calculateTotalPrice() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].unit_price * buyQuantities[i];
    }
    return total.toFixed(2);
  }

  function checkoutButton(e) {
    e.preventDefault();

    console.log("FFFFF");
  }

  useEffect(() => {
    const totalPrice = calculateTotalPrice();
    console.log('Total Price:', totalPrice);
  }, [cart, buyQuantities]);

  return (
    <div>
      <h1>CARRINHO</h1>
      <div>
        <Link to="/market">
          Voltar
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Name</th>
            <th>Preço Unitário</th>
            <th>Quantidade</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ image, name, unit_price, quantity }, index) => (
            <tr key={name}>
              <td><img src={image} height={30} alt="new" /></td>
              <td>{name}</td>
              <td>{unit_price}</td>
              <td>
                <input
                  type='number'
                  value={buyQuantities[index]}
                  onChange={({ target }) => handleQuantityChange(index, target.value)}
                  max={quantity}
                  min={0}
                />
              </td>
              <td>{(buyQuantities[index] * unit_price).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id='total-container'>
        <p>Total: R$ {calculateTotalPrice()}</p>
      </div>
      <div id='checkout-button-container'>
        <button
          type='submit'
          onClick={(e) => checkoutButton(e)}
        >
          FINALIZAR COMPRA
        </button>
      </div>
    </div>
  );
}

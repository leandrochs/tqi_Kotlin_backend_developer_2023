import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './market.css';
import GetCategoryForMarket from '../getCategoryForMarket/GetCategoryForMarket';

export default function Market() {

  return (
    <div>
      <h1 id='title-container'>JUMARKET</h1>
      <div id='link-cart-container'>
        <Link to="/market/cart">
          Ver Carrinho
        </Link>
      </div>
        <GetCategoryForMarket />
    </div>
  );
}
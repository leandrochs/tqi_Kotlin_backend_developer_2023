import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './home.css'

export default function Home() {
  return (
    <div id='home-container'>
        <div className='home-link-container'>
          <Link to="/admin">
            ADMIIN
          </Link>
        </div>
        <div className='home-link-container'>
          <Link to="/market">
            MARKET
          </Link>
        </div>
    </div>
  );
}
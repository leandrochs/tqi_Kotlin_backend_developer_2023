import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './backOrHome.css';

export default function BackOrHome() {

  return (
    <div id="admin-container">
      <div>
        <Link to="/" className='link-admin'>
          HOME
        </Link>
      </div>
    </div>
  );
}
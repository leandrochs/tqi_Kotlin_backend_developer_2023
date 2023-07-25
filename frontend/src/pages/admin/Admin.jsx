import React, { useEffect } from 'react';
import getApiCategories from '../../services/getApiCategories';
import { Link } from 'react-router-dom';
import './admin.css';
import AdminOptions from '../../component/adminOptions/AdminOptions';

export default function Admin() {

  return (
    <div id="admin-container">
      <AdminOptions />
    </div>
  );
}
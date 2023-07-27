import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './adminOptions.css';

export default function AdminOptions() {

  return (
    <div id="admin-container">
      <Link to="/admin/getcategory" className='link-admin'>
        Consultar Categorias
      </Link>
      <Link to="/admin/postcategory" className='link-admin'>
        Cadastrar Categorias
      </Link>
      <Link to="/admin/putcategory" className='link-admin'>
        Atualizar Categorias
      </Link>
      <Link to="/getproduct" className='link-admin'>
        Consultar Produtos
      </Link>
      <Link to="/postproduct" className='link-admin'>
        Cadastrar Produtos
      </Link>
      <Link to="/putproduct" className='link-admin'>
        atualizar Produtos
      </Link>
    </div>
  );
}
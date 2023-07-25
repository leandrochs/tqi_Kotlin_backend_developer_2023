import React, { useEffect, useState } from 'react';
import getApiCategories from '../../services/getApiCategories';
import './getCategory.css';
import { Link } from 'react-router-dom';

export default function GetCategory() {
  const [categories, setCategories] = useState([]);

  async function getApi() {
    const res = await getApiCategories()
    setCategories(res);
  }

  useEffect(() => getApi, [])

  return (
    <div>
      <h1>Categorias Cadastradas</h1>
      <section>
        {categories &&
          categories.map(({ category_id, name }) => (
            <p key={category_id}>
              {`${category_id} - ${name}`}
            </p>
          ))
        }
      </section>
      <div>
        <Link to='/admin'>
          VOLTAR
        </Link>
      </div>
    </div>
  );
}
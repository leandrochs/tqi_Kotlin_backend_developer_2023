import React, { useEffect, useState } from 'react';
import getApiCategories from '../../services/getApiCategories';
import getApiProductsByCategoryId from '../../services/getApiProductsByCategoryId';
import CardProduct from '../../component/cardProduct/CardProduct';
import './getCategoryForMarket.css';

export default function GetCategoryForMarket() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([""]);

  async function getApi() {
    const res = await getApiCategories();
    setCategories(res);
  }

  async function onClickButton(category_id) {
    const res = await getApiProductsByCategoryId(category_id);

    if (res.name) {
      setProducts([])
    } else {
      setProducts(res)
    }
  }

  useEffect(() => {
    getApi();
    onClickButton(1);
  }, [])

  return (
    <div className='container'>
      <h1>Categorias De Produtos</h1>
      <div id='sections-container'>
        <section id='categories-section-container'>
          {categories &&
            categories.map(({ category_id, name }) => (
              <div key={category_id} id='button-market-container'>
                <button
                  type='button'
                  onClick={() => onClickButton(category_id)}
                >
                  {name}
                </button>
              </div>
            ))
          }
        </section>
        <section id='card-section-container'>
          {products.length === 0
            ? (<div>Nenhum produto encontrado.</div>)
            : (products.map((product, index) => <CardProduct key={ index } product={ product } />))
          }
        </section>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import './postCategory.css';
import { Link } from 'react-router-dom';
import postApiCategories from '../../services/postApiCategories';

export default function PostCategory() {
  const [categorie, setCategorie] = useState("");
  const [newCategorie, setNewCategorie] = useState("");

  async function getApi() {
    const res = await postApiCategories(categorie);
    if (res.errorMessage) {
      console.log(res.errorMessage);
    } else {
      setNewCategorie(res)
      console.log(res);
    }
    setCategorie("")
  }

  function onClickButton(event) {
    event.preventDefault();
    getApi();
  }

  return (
    <div className='container'>
      <h1>Nome da Nova Categoria</h1>
      <section>
        <form>
          <input
            type='text'
            value={categorie}
            placeholder='Nova Categoria'
            onChange={({ target }) => {
              setCategorie(target.value);
              setNewCategorie('')
            }}
          />
          <button
            className='form-buttonSubmit'
            type='submit'
            onClick={onClickButton}
            disabled={categorie.length === 0}
          >
            ENVIAR
          </button>
        </form>
      </section>
      <section id='display-section-new-category'>
        {
          newCategorie &&
          `Nova categoria: ${newCategorie.name} - id: ${newCategorie.category_id}`
        }
      </section>
      <section id='link-router-section'>
        <div className='link-router'>
          <Link to='/admin'>
            VOLTAR
          </Link>
        </div>
      </section>
    </div>
  );
}
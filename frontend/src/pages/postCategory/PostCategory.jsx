import React, { useEffect, useState } from 'react';
import './postCategory.css';
import { Link } from 'react-router-dom';
import postApiCategories from '../../services/postApiCategories';

export default function PostCategory() {
  const [categorie, setCategorie] = useState("");

  async function getApi() {
    const res = await postApiCategories(categorie);
    if (res.errorMessage) {
      console.log(res.errorMessage);
    }
    setCategorie("")
  }

  function onClickButton(event) {
    event.preventDefault();
    getApi();
  }

  return (
    <div>
      <h1>Nome da Nova Categoria</h1>
      <section>
        <form>
          <input
            type='text'
            value={categorie}
            placeholder='Nova Categoria'
            onChange={({ target }) => setCategorie(target.value)}
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
      <div>
        <Link to='/admin'>
          VOLTAR
        </Link>
      </div>
    </div>
  );
}
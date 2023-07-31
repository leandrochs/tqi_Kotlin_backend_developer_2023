import React, { useEffect, useState } from 'react';
import './putCategory.css';
import { Link } from 'react-router-dom';
import getCategorieById from '../../services/getCategorieById';
import putApiCategories from '../../services/putApiCategories';

export default function PutCategory() {
  const [categoryId, setCategoryId] = useState("");
  const [newName, setNewName] = useState("");
  const [resNewName, setResNewName] = useState("");
  const [resCategorie, setResCategorie] = useState("");

  async function getApiCategoryById() {
    const res = await getCategorieById(categoryId);
    if (res.errorMessage) {
      console.log(res.errorMessage);
    } else {
      setResCategorie(res);
    }
    setNewName("");
    setResNewName("");
  }

  async function getApiPutNewName() {
    const res = await putApiCategories(categoryId, newName);
    if (res.errorMessage) {
      console.log(res.errorMessage);
    } else {
      setResNewName(res);
    }
    setCategoryId("");
    setResCategorie("");
  }

  function onClickButtonGetById(event) {
    event.preventDefault();
    getApiCategoryById();
  }

  function onClickButtonPutNewName(event) {
    event.preventDefault();
    getApiPutNewName();
  }

  return (
    <div className='container'>
      <h1>Atualizar Nome da Categoria</h1>
      <section>
        <form>
          <input
            type='text'
            value={categoryId}
            placeholder='Id da categoria'
            onChange={({ target }) => {
              setCategoryId(target.value);
              setResCategorie('')
            }}
          />
          <button
            className='form-buttonSubmit'
            type='submit'
            onClick={onClickButtonGetById}
            disabled={categoryId.length === 0}
          >
            Consultar
          </button>
        </form>
      </section>
      <section id='display-section-new-category'>
        {
          resCategorie &&
          `Nome Atual: ${resCategorie.name} - id: ${resCategorie.category_id}`
        }
      </section>
      <section id='section-new-category-name'>
        <form>
          <input
            type='text'
            value={newName}
            placeholder='Novo nome da Categoria'
            onChange={({ target }) => setNewName(target.value)}
          />
          <button
            className='form-buttonSubmit'
            type='submit'
            onClick={onClickButtonPutNewName}
            disabled={newName.length === 0}
          >
            Atualizar
          </button>
        </form>
        <section id='display-section-new-category'>
          {
            resNewName &&
            `Novo Nome: ${resNewName.name} - id: ${resNewName.category_id}`
          }
        </section>
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
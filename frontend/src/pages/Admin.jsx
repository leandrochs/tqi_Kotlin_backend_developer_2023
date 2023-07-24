import React, { useEffect } from 'react';
import getApiCategories from '../services/getApiCategories';

export default function Admin() {

  async function getApi(params) {
    const categories = getApiCategories();

    console.log(categories);
    
  }

  useEffect(() => getApi, [])

  return (
    <div>
        Addddddddddd
    </div>
  );
}
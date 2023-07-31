import axios from 'axios';

async function getCategorieById(categoryId) {
  const config = {
    method: 'get',
    url: `http://localhost:8080/api/category/${categoryId}`,
  };

  return await axios(config)
    .then((Response) => Response.data)
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export default getCategorieById;
import axios from 'axios';

async function getApiProductsByCategoryId(categoryId) {
  const config = {
    method: 'get',
    url: `http://localhost:8080/api/product/categoryid/${categoryId}`,
  };

  return await axios(config)
    .then((Response) => Response.data)
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export default getApiProductsByCategoryId;
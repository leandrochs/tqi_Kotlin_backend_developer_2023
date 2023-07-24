import axios from 'axios';

async function getApiCategories() {
  const config = {
    method: 'get',
    url: "http://localhost:8080/api/category",
  };

  return await axios(config)
    .then((Response) => Response.data)
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export default getApiCategories;
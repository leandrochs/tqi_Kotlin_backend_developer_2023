import axios from 'axios';

async function postApiCategories(categoryName) {
  const config = {
    method: 'post',
    url: "http://localhost:8080/api/category",
    data: {
      name: categoryName,
    }
  };

  return await axios(config)
    .then((Response) => Response.data)
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export default postApiCategories;
import axios from 'axios';

async function putApiCategories(categoryId, newCategoryName) {
  console.log("====>", categoryId, newCategoryName);
  const config = {
    method: 'put',
    url: `http://localhost:8080/api/category/${categoryId}`,
    data: {
      name: newCategoryName,
    }
  };

  return await axios(config)
    .then((Response) => Response.data)
    .catch((error) => {
      console.error(error);
      return error;
    });
}

export default putApiCategories;
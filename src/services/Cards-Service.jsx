import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const CardService = () => {

  const urlGetAll = 'destinations';
  

  const getAll = () => {
    const response = axios.get(urlGetAll);
    return response;
  };
  const getById = async (id) => {
    const response = axios.get(`${urlGetAll}/${id}`);
    return response;
  };

  const postDestination = async (id, formData) => {
    try {
      return await axios.post(`${urlGetAll}/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
          "Accept": "application/json",
        },
      });
    } catch (error) {
      throw error;
    }
  };
 
  return {
    getAll,
    getById,
    postDestination,
  }
}
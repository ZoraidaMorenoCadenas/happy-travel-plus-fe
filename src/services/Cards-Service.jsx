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
  const getById = (id) => {
    const response = axios.get(`${urlGetAll}/${id}`);
    return response;
  };
 
  return {
    
    getAll,
    getById,
  
  }
}
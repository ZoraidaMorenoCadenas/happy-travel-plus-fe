import axios from 'axios';
//estas son algunas configuraciones que tiene axios, mientras seguimos con el curso encontrarás más
axios.defaults.baseURL = 'http://localhost:8000/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const CardService = () => {
  const urlGetAll = 'cards';
  //Los endpoints que tienen llaves con un texto dentro, quiere decir que le has de pasar algún valor /id/{image}/{size}, eso significa que image y size son valores que te dirá la documentación cómo se pasan.
  //const urlGetById = 'id';
  //Construye la url para el tercer endpoint
 // const urlGetGrayscale = '?grayscale';

  const getAll = () => {
    const response = axios.get(urlGetAll);
    return response;
  };
  const getById = (id) => {
    const response = axios.get(`${urlGetAll}/${id}`);
    return response;
  };
 // const getRandomGrayscale = (size) => {
    //construye como sería el método de la petición para obtener una imagen aleatoria en escala de grises (apóyate en la documentación)
   // const response = axios.get(`/${size}${urlGetGrayscale}`);
    //return response;
  //};
  return {
    //Deberás retornar el método para que puedas exportarlo
    getAll,
    getById,
   // getRandomGrayscale
  }
}
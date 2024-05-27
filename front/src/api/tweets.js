import axios from "./axios";
// llamados CRUD para los tweets hacia el backend

export const getTweetsRequest = () => axios.get("/tweets"); // trae todos los tweets de la persona especifica del backend
export const getAllTweetsRequest = () => axios.get("/tweets/getAll"); // trae todos los tweets de todas las personas
export const getTweetRequest = (id) => axios.get(`/tweets/${id}`); // trae un tweet especifico
export const createTweetRequest = (tweet) => axios.post("/tweets", tweet);  // crea un tweet
export const updateTweetRequest = (id,tweet) =>
  axios.put(`/tweets/${id}`, tweet);  // actualiza un tweet especifico
export const deleteTweetRequest = (id) => axios.delete(`/tweets/${id}`);  // elimina un tweet especifico

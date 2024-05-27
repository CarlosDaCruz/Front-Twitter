import axios from "./axios";


export const registerRequest = (user) => axios.post(`/register`, user);

// export const registerRequest = async (user) =>
//   axios.post(`/auth/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/verify`);

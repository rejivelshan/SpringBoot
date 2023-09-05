import axios from 'axios';

const url = "http://localhost:8282";

const addData = (data) => axios.post(`${url}/api/v1/user/signup`, data);
const getData = (data) => axios.post(`${url}/api/v1/user/login`, data);
// const deleteData = (id) => axios.delete(`${url}/api/v1/user/deleteUser/${id}`);
export {addData,getData};
import axios from "axios";

const url = "http://localhost:3002/";




const findAll = async () => {
  return axios.get(url);
};



const create = async (form:any) => {
  return axios.post(url, form);
};

const remove = async (id: string) => {
  return axios.delete(url + id);
};

const update = async (id: string) => {
  return axios.patch(url + "/" + id);
};



const service = { findAll, create, remove,update};

export default service;


// const create = async (facility: Facility) => {
//   return axios.post(url, facility);
// };

// const update = async (id: string, facility: Facility) => {
//   return axios.patch(url + '/' + id, facility);
// };

// const remove = async (id: string) => {
//   return axios.delete(url + '/' + id);
// };


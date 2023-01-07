import axios from "axios";

export const url = "http://localhost:8888/";

export const Api = {
  getPagination: (page) => fetch(`${url}employees?_limit=2&_page=${page}`),
  getCrud: () => fetch(`${url}employees`),
  getCrudId: (id) => fetch(`${url}employees/${id}`),
  getCrudIdEdit: (id, data) => axios.put(`${url}employees/${id}`, data),
};

import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://sore-rose-pike-sari.cyclic.app",
});

export const postBook = (payload) => api.post("/api/addBooks", payload);
export const addImage = (payload) => api.post("/api/addImage", payload);
// export const createClient = (payload) => api.post("/create/client", payload);
// export const createInvoice = (payload) => api.post("/create/invoice", payload);
// export const createTransaction = (payload) =>
//   api.post("/create/transaction", payload);

//get
export const getBooks = (query, skip) =>
  api.get(`/api/books?query=${query}&skip=${skip}`);

export const getBookById = (id) => api.get(`/api/book/${id}`);

const apis = {
  getBooks,
  postBook,
  addImage,
  getBookById,
};

export default apis;

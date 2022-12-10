import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const postBook = (payload) => api.post("/api/addBooks", payload);
// export const createClient = (payload) => api.post("/create/client", payload);
// export const createInvoice = (payload) => api.post("/create/invoice", payload);
// export const createTransaction = (payload) =>
//   api.post("/create/transaction", payload);

//get
export const getBooks = (query, skip) =>
  api.get(`/api/books?query=${query}&skip=${skip}`);
// export const getCompanies = () => api.get("/get/companies");
// export const getStudents = () => api.get("/get/students");
// export const getCompanyResultById = (id) => api.get(`/get/companyResult/${id}`);
// export const getStudentById = (id) => api.get(`/get/student/${id}`);
// export const getUnregisteredCandidates = (id) =>
//   api.get(`/get/unregisteredCandidates/${id}`);
// export const getTransactionOfType = () => api.get("/get/:type");
// export const getItems = () => api.get("/get/item");
// export const getItemById = (id) => api.get("/item/:id");

const apis = {
  getBooks,
  postBook,
};

export default apis;

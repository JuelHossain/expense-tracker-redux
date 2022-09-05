import axios from "../../utils/axios";

export const getTransactions = async (filter) => {
  const { selected, search } = filter ?? {};
  let query = ``;

  if (search) query += `q=${search}`;
  if (selected) {
    if (selected !== "all") query += `&type_like=${selected}`;
  }

  const response = await axios.get(`/transactions?${query}`);

  return response.data;
};
export const countTransaction = async () => {
  const { data } = await axios.get("transactions");
  return data.length;
};
export const addTransaction = async (data) => {
  const response = await axios.post("/transactions", data);

  return response.data;
};

export const editTransaction = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data);

  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = axios.delete(`/transactions/${id}`);

  return response.data;
};

import axios from 'axios';
const baseUrl = '/api/persons';

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data);
};

const create = (newObject) => {
  const req = axios.post(baseUrl, newObject);
  return req.then((res) => res.data);
};

const remove = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then((res) => res.data);
};

const update = (id, updatedObject) => {
  const req = axios.put(`${baseUrl}/${id}`, updatedObject);
  return req.then((res) => res.data);
};

export default { getAll, create, remove, update };

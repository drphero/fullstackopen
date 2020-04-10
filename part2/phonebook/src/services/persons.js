import axios from 'axios';

const getAll = () => {
  const req = axios.get('/persons');
  return req.then((res) => res.data);
};

const create = (newObject) => {
  const req = axios.post('/persons', newObject);
  return req.then((res) => res.data);
};

export default { getAll, create };

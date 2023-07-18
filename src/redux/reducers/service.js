import api from "../../api";

const addItem = async (item) => {
  const response = await api.post('/inventory', item)
  .catch((error) => {
    return error;
  });

  return response.data;
};

const getItems = async (sort) => {
    const response = await api.get('/inventory?sort=' + sort)
    .catch((error) => {
        return error;
    });
    return response.data;
};

const getItem = async (id) => {
    const response = await api.get('/inventory/' + id)
    .catch((error) => {
        return error;
    });
    return response.data;
};

const editItem = async (item, id) => {
    const response = await api.patch('/inventory/' + id, item)
    .catch((error) => {
      return error;
    });
  
    return response.data;
};

const deleteItem = async (id) => {
    const response = await api.delete('/inventory/' + id)
    .catch((error) => {
        return error;
    });
    return response.data;
};

export default {
    addItem,
    getItems,
    getItem,
    editItem,
    deleteItem
};
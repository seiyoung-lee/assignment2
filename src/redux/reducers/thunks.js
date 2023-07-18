import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionType';
import InventoryService from './service';

export const getItemAsync = createAsyncThunk(
  actionTypes.GET_ITEM,
  async (id) => {
    return await InventoryService.getItem(id);
  }
);

export const getItemsAsync = createAsyncThunk(
    actionTypes.GET_ITEMS,
    async (sort = 0) => {
      return await InventoryService.getItems(sort);
    }
);

export const editItemAsync = createAsyncThunk(
    actionTypes.EDIT_ITEMS,
    async (payload) => {
        const { item, id } = payload;
      return await InventoryService.editItem(item, id);
    }
);

export const addItemAsync = createAsyncThunk(
  actionTypes.ADD_USER,
  async (item) => {
    return await InventoryService.addItem(item);
  }
);

export const deleteItemAsync = createAsyncThunk(
    actionTypes.DELETE_ITEM,
    async (item) => {
      return await InventoryService.deleteItem(item);
    }
);

export const deleteItemsAsync = createAsyncThunk(
    actionTypes.DELETE_ITEMS,
    async (items) => {
        const promises = [];
        for (const item of items) {
            promises.push(InventoryService.deleteItem(item.id));
        }
        return await Promise.all(promises);
    }
);
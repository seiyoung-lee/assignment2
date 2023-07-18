import { createSlice } from '@reduxjs/toolkit';
import UBCLogo from "../../images/ubcLogo.png";
import { REQUEST_STATE } from './utils';
import { 
    getItemsAsync,
    addItemAsync, 
    deleteItemAsync,
    deleteItemsAsync,
    editItemAsync
} from './thunks';


const INITIAL_STATE = {
    items: [],
    getItems: REQUEST_STATE.IDLE,
    addItem: REQUEST_STATE.IDLE,
    deleteItem: REQUEST_STATE.IDLE,
    deleteItems: REQUEST_STATE.IDLE,
    editItem: REQUEST_STATE.IDLE,
    error: null
};


const inventorySlice = createSlice({
    name: 'inventory',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getItemsAsync.pending, (state) => {
            state.getItems = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(getItemsAsync.fulfilled, (state, action) => {
            state.getItems = REQUEST_STATE.FULFILLED;
            state.items = action.payload;
        })
        .addCase(getItemsAsync.rejected, (state, action) => {
            state.getItems = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(editItemAsync.pending, (state) => {
            state.editItem = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(editItemAsync.fulfilled, (state, action) => {
            state.editItem = REQUEST_STATE.FULFILLED;
            const items = [...state.items];
            const foundItem = items.find(item => item.id === action.payload.id);
            for (const key in action.payload) {
                foundItem[key] = action.payload[key];
            }
            state.items = items;
        })
        .addCase(editItemAsync.rejected, (state, action) => {
            state.editItem = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(addItemAsync.pending, (state) => {
            state.addItem = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(addItemAsync.fulfilled, (state, action) => {
            state.addItem = REQUEST_STATE.FULFILLED;
            state.items = [...state.items, action.payload];
        })
        .addCase(addItemAsync.rejected, (state, action) => {
            state.addItem = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(deleteItemAsync.pending, (state) => {
            state.deleteItem = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(deleteItemAsync.fulfilled, (state, action) => {
            state.deleteItem = REQUEST_STATE.FULFILLED;
            const items = [...state.items];
            const foundItem = items.find(item => item.id === action.payload);
            const index = items.indexOf(foundItem);
            items.splice(index, 1);
            state.items = items;
        })
        .addCase(deleteItemAsync.rejected, (state, action) => {
            state.deleteItem = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
        .addCase(deleteItemsAsync.pending, (state) => {
            state.deleteItems = REQUEST_STATE.PENDING;
            state.error = null;
        })
        .addCase(deleteItemsAsync.fulfilled, (state, action) => {
            state.deleteItems = REQUEST_STATE.FULFILLED;
            const items = [];
            state.items = items;
        })
        .addCase(deleteItemsAsync.rejected, (state, action) => {
            state.deleteItems = REQUEST_STATE.REJECTED;
            state.error = action.error;
        })
    }
  });

export default inventorySlice.reducer;
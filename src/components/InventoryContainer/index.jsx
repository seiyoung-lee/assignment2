import React, { useState, useEffect }  from 'react';
import Button from '../Button';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../Card';
import Modal from '../Modal';

import { del_inventory, clear_inventory, edit_inventory } from "../../redux/actions";

import "./styles.css";
import { deleteItemAsync, deleteItemsAsync, editItemAsync, getItemsAsync } from '../../redux/reducers/thunks';

const InventoryContainer = () => {
    const [id, setId] = useState("");
    const [searchVal, setSearchVal] = useState("");
    const [sortSelectVal, setSortSelectVal] = useState("increase");
    const [inventoryItems, setInventoryItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [showingInventoryItems, setShowingInventoryItems] = useState([]);

    const inventoryState = useSelector(state => state.inventory);

    useEffect(() => {
        console.log(inventoryState);
        dispatch(getItemsAsync());
        setInventoryItems(inventoryState.items);
        setShowingInventoryItems(inventoryState.items);
        console.log(process.env);
    }, []);

    useEffect(() => {
        setInventoryItems(inventoryState.items);
        setShowingInventoryItems(inventoryState.items);
    }, [inventoryState.items]);

    const dispatch = useDispatch();

    const openModal = (currID) => {
        setId(currID);
        setOpen(true);
    }

    const handleSortSelectChange = (e) => {
        setSortSelectVal(e.target.value);
    }

    const handleSortClick = () => {
        if (sortSelectVal === "increase") {
            dispatch(getItemsAsync(1));
        } else {
            dispatch(getItemsAsync(-1));
        }
    }

    const handleSaveEdit = async (currName, currDescription, currPrice, currImage, currID) => {
        const editedInv = {
            name: currName,
            description: currDescription,
            price: currPrice,
            imageURL: currImage,
        }
        const payload = {
            item: editedInv,
            id: currID
        }
        return await dispatch(editItemAsync(payload));
    }

    const handleSearchInputChange = (e) => {
        const searchedOrSortedArray = inventoryItems.filter((product) => {
            return product['name'].toLowerCase().includes(e.target.value);
        });
        setShowingInventoryItems(searchedOrSortedArray);
        setSearchVal(e.target.value);
    }

    return (
        <div className = "inventoryOuterContainer">
            <div className = "inventoryInnerContainer">
                <h3 className="inventoryTitle">
                    Current Inventory <br />
                </h3>
                <div className = "buttonsSortOuter">
                    <div className = "buttonsSortInner">
                        <input type="text" placeholder="Search by name..." className = "inputStyles" value={searchVal} onChange={handleSearchInputChange}/>
                    </div>
                </div>
                <div className = "buttonsSortOuter">
                    <div className = "buttonsSortInner">
                        <Button name={"Sort"}  onClick={handleSortClick}/>
                        <select value = {sortSelectVal} className = "dropdownStyles" onChange={handleSortSelectChange}>
                            <option value="increase">Increasing Price</option>
                            <option value="decrease">Decreasing Price</option>
                        </select>
                    </div>
                </div>
                <ul className="listItems">
                    {showingInventoryItems.length > 0 ? 
                        showingInventoryItems.map((item) => (
                            <Card 
                                key = {item.id} 
                                name = {item.name}
                                imageURL = {item.imageURL}
                                showModal = {() => {
                                    openModal(item.id);
                                }}
                                deleteCard = {() => {
                                    dispatch(deleteItemAsync(item.id));
                                }}
                            />
                        )) : 
                        <div className='noShow'>
                            <p>
                                No items showing
                            </p>
                        </div>
                    }
                </ul>
                <div className='inventoryDataDesc'>
                    <div></div>
                    <p>
                        Items Showing: {showingInventoryItems.length} <br />
                        Total Items: {inventoryItems.length}
                    </p>
                </div>
                <div className="outerFormButtonInventory">
                    <Button name={"Delete All"}  onClick={() => dispatch(deleteItemsAsync(inventoryItems))}/>
                </div>
            </div>
            <Modal 
                isOpen = {open}
                onClose = {() => setOpen(false)}
                id = {id}
                handleSave = {async (currName, currDescription, currPrice, currImage) => {
                    return await handleSaveEdit(currName, currDescription, currPrice, currImage, id);
                }}
            />
        </div>
    )

}

export default InventoryContainer;
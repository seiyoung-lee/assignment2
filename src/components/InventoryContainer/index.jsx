import React, { useState, useEffect }  from 'react';
import Button from '../Button';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../Card';
import Modal from '../Modal';

import { del_inventory, clear_inventory} from "../../redux/actions";

import "./styles.css";

const InventoryContainer = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [searchSelectVal, setSearchSelectVal] = useState("name");
    const [searchVal, setSearchVal] = useState("");
    const [sortSelectVal, setSortSelectVal] = useState("increase");
    const [inventoryItems, setInventoryItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [showingInventoryItems, setShowingInventoryItems] = useState([]);

    const inventoryState = useSelector(state => state.ChangeInventory.inventoryState);

    useEffect(() => {
        const arrayOfItems = [];
        for (const key in inventoryState) {
            const pushedElement = {
                ...inventoryState[key]
            }
            pushedElement["index"] = key;
            arrayOfItems.push(pushedElement);
        }
        setInventoryItems(arrayOfItems);
        setShowingInventoryItems(arrayOfItems);
    }, [inventoryState]);

    const dispatch = useDispatch();

    const openModal = (currName, currDescription, currPrice,  currImage) => {
        setName(currName);
        setPrice(currPrice);
        setDescription(currDescription);
        setImage(currImage);
        setOpen(true);
    }

    const handleSortSelectChange = (e) => {
        setSortSelectVal(e.target.value);
    }

    const handleSearchSelectChange = (e) => {
        setSearchSelectVal(e.target.value);
    }

    const handleSearchInputChange = (e) => {
        const searchedOrSortedArray = inventoryItems.filter((product) => {
            return product[searchSelectVal].toLowerCase().includes(e.target.value);
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
                        <input type="text" placeholder="Search by..." className = "inputStyles" value={searchVal} onChange={handleSearchInputChange}/>
                        <select value = {searchSelectVal} className = "dropdownStyles" onChange={handleSearchSelectChange} >
                            <option value="name">name</option>
                            <option value="description">description</option>
                        </select>
                    </div>
                </div>
                <div className = "buttonsSortOuter">
                    <div className = "buttonsSortInner">
                        <Button name={"Sort"}  onClick={() => {}}/>
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
                                key = {item.index} 
                                name = {item.name}
                                imageURL = {item.imageURL}
                                showModal = {() => {
                                    console.log("openModal");
                                    openModal(item.name, item.description, item.price, item.imageURL);
                                }}
                                deleteCard = {() => {
                                    dispatch(del_inventory(item.index));
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
                    <Button name={"Delete All"}  onClick={() => dispatch(clear_inventory())}/>
                </div>
            </div>
            <Modal 
                isOpen = {open}
                onClose = {() => setOpen(false)}
                image = {image}
                name = {name}
                price = {price}
                description = {description}
            />
        </div>
    )

}

export default InventoryContainer;
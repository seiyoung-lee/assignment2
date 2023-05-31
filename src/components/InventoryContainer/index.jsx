import React, { useState, useEffect }  from 'react';
import Button from '../Button';
import {useSelector, useDispatch} from 'react-redux';
import Card from '../Card';

import "./styles.css";

const InventoryContainer = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [showingInventoryItems, setShowingInventoryItems] = useState([]);

    const inventoryState = useSelector(state => state.ChangeInventory.inventoryState);

    useEffect(() => {
        const arrayOfItems = [];
        for (const key in inventoryState) {
            arrayOfItems.push(inventoryState[key]);
        }
        setInventoryItems(arrayOfItems);
        setShowingInventoryItems(arrayOfItems);
    }, [inventoryState]);

    const dispatch = useDispatch()

    return (
        <div className = "inventoryOuterContainer">
            <div className = "inventoryInnerContainer">
                <h3 className="inventoryTitle">
                    Current Inventory <br />
                </h3>
                <div className = "buttonsSortOuter">
                    <div className = "buttonsSortInner">
                        <input type="text" placeholder="Search by..." className = "inputStyles" id = "searchInventory" />
                        <select id="searchDropdown" className = "dropdownStyles">
                            <option value="name">name</option>
                            <option value="description">description</option>
                        </select>
                    </div>
                </div>
                <div className = "buttonsSortOuter">
                    <div className = "buttonsSortInner">
                        <Button name={"Sort"}  onClick={() => {}}/>
                        <select id="sortDropdown" className = "dropdownStyles">
                            <option value="increase">Increasing Price</option>
                            <option value="decrease">Decreasing Price</option>
                        </select>
                    </div>
                </div>
                <ul className="listItems">
                    {showingInventoryItems.length > 0 ? 
                        showingInventoryItems.map((item) => (
                            <Card name = {item.name} imageURL = {item.imageURL} />
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
                        Total Items: {inventoryItems.length} <br />
                        Items Showing: {showingInventoryItems.length} <br />
                    </p>
                </div>
                <div className="outerFormButtonInventory">
                    <Button name={"Delete All"}  onClick={() => {}}/>
                </div>
            </div>
        </div>
    )

}

export default InventoryContainer;
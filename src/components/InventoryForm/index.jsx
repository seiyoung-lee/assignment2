import React, { useState }  from 'react';
import Button from '../Button';
import "./styles.css";

const InventoryForm = () => {
    const [nameValue, setNameValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [imgValue, setImgValue] = useState('');

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    };

    const handleDescChange = (event) => {
        setDescValue(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPriceValue(event.target.value);
    };

    const handleImgChange = (event) => {
        setImgValue(event.target.value);
    };
    
    return (
        <div className = "formOuterContainer">
            <div className = "formInnerContainer">
                <h3 className="formTitle">
                    New Inventory
                </h3>
                <form id="productForm">
                    <div className = "formInput">
                        <label className='labelStyles' >Name:</label>
                        <input type="text" className = "inputStyles" value={nameValue} onChange={handleNameChange}/>
                        <span className = "noValIntroduced" id = "errorName">Introduce a value</span>
                    </div>
                    <div className = "formInput">
                        <label className='labelStyles' >Description:</label>
                        <input type="text" className = "inputStyles" value={descValue} onChange={handleDescChange}></input>
                        <span className = "noValIntroduced" id = "errorDesc">Introduce a value</span>
                    </div>
                    <div className = "formInput">
                        <label className='labelStyles' >Price:</label>
                        <input type="number" className = "inputStyles" value={priceValue} onChange={handlePriceChange}/>
                        <span className = "noValIntroduced" id = "errorPrice">Introduce a value</span>
                    </div>
                    <div className = "formInput">
                        <label className='labelStyles' >Image URL:</label>
                        <input type="text" className = "inputStyles" value={imgValue} onChange={handleImgChange} />
                        <span className = "noValIntroduced" id = "errorImage">Introduce a value</span>
                    </div>
                    <div className="outerFormButton">
                        <Button name = "Submit" onClick={() => {}} />
                        <Button name = "Reset" onClick={() => {}} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InventoryForm;
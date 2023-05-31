import React, { useState }  from 'react';
import Button from '../Button';
import FormInput from '../FormInput';
import "./styles.css";

const InventoryForm = () => {
    const [nameValue, setNameValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [imgValue, setImgValue] = useState('');

    
    return (
        <div className = "formOuterContainer">
            <div className = "formInnerContainer">
                <h3 className="formTitle">
                    New Inventory
                </h3>
                <div id="productForm">
                    <FormInput title = "Name" onChange = {(val) => setNameValue(val)}  value = {nameValue} error = {false} type = "text" />
                    <FormInput title = "Description" onChange = {(val) => setDescValue(val)}  value = {descValue} error = {false} type = "text" area = {true} />
                    <FormInput title = "Price" onChange = {(val) => setPriceValue(val)}  value = {priceValue} error = {false} type = "number" />
                    <FormInput title = "Image URL" onChange = {(val) => setImgValue(val)}  value = {imgValue} error = {false} type = "text" />
                    <div className="outerFormButton">
                        <Button name = "Submit" onClick={() => {}} />
                        <Button name = "Reset" onClick={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryForm;
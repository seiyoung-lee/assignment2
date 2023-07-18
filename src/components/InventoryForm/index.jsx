import React, { useState }  from 'react';
import Button from '../Button';
import FormInput from '../FormInput';
import {useDispatch} from 'react-redux';
import { addItemAsync } from '../../redux/reducers/thunks';
import "./styles.css";

const initialError = {
    nameError: false,
    descError: false,
    priceError: false,
    imgError: false,
};

const InventoryForm = () => {

    const [nameValue, setNameValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [imgValue, setImgValue] = useState('');
    const [errors, setError] = useState(initialError);

    const dispatch = useDispatch();

    const resetVals = () => {
        setNameValue('');
        setDescValue('');
        setPriceValue('');
        setImgValue('');
        setError(initialError);
    }

    const submitVal = () => {
        let forgot = 0;
        let errors = {...initialError};
        if (nameValue === "") {
            forgot++;
            errors.nameError = true;
        }
        if (descValue === "") {
            forgot++;
            errors.descError = true;
        }
        if (priceValue === "") {
            forgot++;
            errors.priceError = true;
        }
        if (imgValue === "") {
            forgot++;
            errors.imgError = true;
        }
        if (forgot === 0) {
            const product = {
                name: nameValue,
                description: descValue,
                price: Number(priceValue),
                imageURL: imgValue
            };
            
            dispatch(addItemAsync(product));
            resetVals();
        }
        setError(errors);
    }

    
    return (
        <div className = "formOuterContainer">
            <div className = "formInnerContainer">
                <h3 className="formTitle">
                    New Item
                </h3>
                <div id="productForm">
                    <FormInput title = "Name" onChange = {(val) => setNameValue(val)}  value = {nameValue} error = {errors.nameError} type = "text" />
                    <FormInput title = "Description" onChange = {(val) => setDescValue(val)}  value = {descValue} error = {errors.descError} type = "text" area = {true} />
                    <FormInput title = "Price" onChange = {(val) => setPriceValue(val)}  value = {priceValue} error = {errors.priceError} type = "number" />
                    <FormInput title = "Image URL" onChange = {(val) => setImgValue(val)}  value = {imgValue} error = {errors.imgError} type = "text" />
                    <div className="outerFormButton">
                        <Button name = "Submit" onClick={() => submitVal()} />
                        <Button name = "Reset" onClick={() => resetVals()} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryForm;
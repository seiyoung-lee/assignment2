import React, { useState, useEffect, useRef }  from 'react'; 
import Button from '../Button';
import FormInput from '../FormInput';
import "./styles.css";

const Modal = (props) => {
    const { isOpen, onClose, image, name, price, description, handleSave } = props;

    const [editedName, setEditedName] = useState(name);
    const [editedPrice, setEditedPrice] = useState(price);
    const [editedDescription, setEditedDescription] = useState(description);
    const [editedImage, setEditedImage] = useState(image);
    const [edit, setEdit] = useState(false);


    const modalRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            setEdit(false);
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };

    }, [isOpen]);

    useEffect(() => {
        setEditedName(name);
        setEditedPrice(price);
        setEditedDescription(description);
        setEditedImage(image);
    }, [name, price, description, image]);


    const handleSaveChanges = () => {
        // Perform save changes logic here
        handleSave(editedName, editedDescription, editedPrice, editedImage);
        setEdit(false);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="outsideModal">
            <div className='outsideModalInner'/> 
          <div className="modalContentOutside" ref={modalRef}>
            <div className='topOfModal'>
                <span className="close-button" onClick={onClose}>&times;</span>
            </div>
            {edit ? (
                <div id="productModalForm">
                    <FormInput title = "Name" onChange = {(val) => setEditedName(val)}  value = {editedName} error = {false} type = "text" />
                    <FormInput title = "Description" onChange = {(val) => setEditedDescription(val)}  value = {editedDescription} error = {false} type = "text" area = {true} />
                    <FormInput title = "Price" onChange = {(val) => setEditedPrice(val)}  value = {editedPrice} error = {false} type = "number" />
                    <FormInput title = "Image URL" onChange = {(val) => setEditedImage(val)}  value = {editedImage} error = {false} type = "text" />
                    <div className="modalFormButton">
                        <Button classNames = "modalButton" name = "Save Changes" onClick={handleSaveChanges} />
                    </div>
                </div>
            ) : (
                <div className="modalContent">
                    <div className="modalContentImage">
                        <img src={editedImage} alt="Product Image" />
                    </div>
                    <div className="modalContentVals">
                        <div className = "modalContentVals">
                            <label className='labelStylesModal' >Name:</label>
                            <p className="elementModal">{editedName}</p> 
                        </div>
                        <div className = "modalContentVals">
                            <label className='labelStylesModal' >Description:</label>
                            <p className="elementModal">{editedDescription}</p> 
                        </div>
                        <div className = "modalContentVals">
                            <label className='labelStylesModal' >Price:</label>
                            <p className="elementModal">{editedPrice}</p> 
                        </div>
                        <div className='modalContentButtons'>
                            <Button classNames = "modalButton" name={"Edit"} onClick={() => {setEdit(true)}}/>
                        </div>
                    </div>
                </div>
            )}
          </div>
        </div>
      );
}

export default Modal;
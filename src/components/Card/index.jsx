import React, { useState, useEffect }  from 'react'; 
import Button from '../Button';
import "./styles.css";


const Card = (props) => {
    const {name, imageURL, showModal, deleteCard} = props;

    return (
        <div className="elementCard">
            <div className="elementCardimage">
                <img src={imageURL} alt="Product Image" />
            </div>
            <div className="elementCardContent">
                <div className = "elementCardContentName">
                    <h2 className="elementCardTitle">{name}</h2> 
                </div>
                <div className='elementCardButtons'>
                    <Button classNames = "infoButton" name={"More Info"} onClick={showModal}/>
                    <Button classNames = "DeleteButton" name={"Delete"} onClick={deleteCard}/>
                </div>
            </div>
        </div>
    );
}

export default Card;


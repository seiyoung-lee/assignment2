import React, { useState, useEffect }  from 'react'; 

import "./styles.css";

const FormInput = (props) => {
    const {title, onChange, value, error, type, area = false} = props;

    const handleChange = (e) =>  {
        onChange(e.target.value);
    }

    return (
        <div className = "formInput">
            <label className='labelStyles' >{title}:</label>
            {
                area ? 
                    <textarea type={type} className = "inputStyles" value={value} onChange={handleChange} />
                :
                    <input type={type} className = "inputStyles" value={value} onChange={handleChange} />
            }
            <span className = "noValIntroduced" id = "errorName">Introduce a value</span>
        </div>
    )
}

export default FormInput;

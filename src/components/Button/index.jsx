import React  from 'react';
import "./styles.css";

const Button = (props) => {
    const { name, onClick } = props;

    const classes = props.classNames ? props.classNames : "";

    return (
        <button className={"buttonStyle " + classes} onClick = {onClick}>
            {name}
        </button>
    )
}

export default Button;
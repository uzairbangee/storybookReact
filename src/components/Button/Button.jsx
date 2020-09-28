import React from 'react'
import "./button.css";

function Button({title, classes, click}) {
    return (
        <button className={['btn', ...classes].join(" ")} onClick={click}>{title}</button>
    )
}

export default Button;

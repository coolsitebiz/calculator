import React from 'react';


function Button(props) {
    return (
        <div 
            text={props.text} 
            id={props.id} 
            className={props.text.length > 1 ? "clear" : (!isNaN(props.text) ? "digit" : "operator")} 
            onClick={props.handleClick}
            >
            {props.text}
        </div>
    );
}

export default Button;
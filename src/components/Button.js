import React from 'react';


function Button(props) {
    return (
        <div id={props.id} className={props.text.length > 1 ? "clear" : (!isNaN(props.text) ? "digit" : "operator")} onClick={props.handleClick}>
            <span>{props.text}</span>
        </div>
    );
}

export default Button;
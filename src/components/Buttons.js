import React from 'react';
import Button from './Button';
import '../css/buttons.css'

function Buttons(props) {
    return (
        <div className="btn-container">
            <Button text="9" id="nine" />
            <Button text="8" id="eight" />
            <Button text="7" id="seven" />
            <Button text="6" id="six" />
            <Button text="5" id="five" />
            <Button text="4" id="four" />
            <Button text="3" id="three" />
            <Button text="2" id="two" />
            <Button text="1" id="one" />
            <Button text="=" id="equals" />
            <Button text="." id="decimal" />
            <Button text="+" id="add" />
            <Button text="-" id="subtract" />
            <Button text="/" id="divide" />
            <Button text="*" id="multiply" />
            <Button text="CE" id="clear" />
        </div>
        

    )
}

export default Buttons;
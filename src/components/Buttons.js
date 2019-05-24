import React from 'react';
import Button from './Button';
import Screen from './Screen';

function Buttons(props) {
    return (
        <div className="container">
            <Screen />
            <Button text="9" id="nine" />
            <Button text="8" id="eight" />
            <Button text="7" id="seven" />
            <Button text="/" id="divide" />
            <Button text="6" id="six" />
            <Button text="5" id="five" />
            <Button text="4" id="four" />
            <Button text="*" id="multiply" />
            <Button text="3" id="three" />
            <Button text="2" id="two" />
            <Button text="1" id="one" />
            <Button text="-" id="subtract" /> 
            <Button text="." id="decimal" />
            <Button text="0" id="zero" />
            <Button text="=" id="equals" />
            <Button text="+" id="add" />
            <Button text="CE" id="clear" />
        </div>
        

    )
}

export default Buttons;
import React from 'react';
import Screen from './Screen';
import Buttons from './Buttons';
import '../css/calculator.css';

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <Buttons />
            </div>
        );
    }
}

export default Calculator;
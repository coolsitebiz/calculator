import React from 'react';
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
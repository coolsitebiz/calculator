import React from 'react';
import Button from './Button';
import Screen from './Screen';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "0",
            output: "0"
        }
        
    }

    //need to validate statement and return error if:
    // --multiple consec operators
    // --non-numeric or operator content

    eval = event => {
        let statement = this.state.input.slice();
        const result = eval(statement);
        this.setState({
            input: result.toString(),
            output: result
        })

    }

    handleClick = event => {
        if (this.state.input[0] === "0") {
            this.setState({input: event.target.innerHTML});
        } else {
        this.setState({
            input: this.state.input.concat(event.target.innerHTML)
        }); 
        }
    }

    render() {
        return (
            <div className="container">
                <Screen id="display" screenText={this.state.input} screenTextBig={this.state.output}/>
                <Button text="9" id="nine"  handleClick={this.handleClick} />
                <Button text="8" id="eight" handleClick={this.handleClick} />
                <Button text="7" id="seven" handleClick={this.handleClick} />
                <Button text="/" id="divide" handleClick={this.handleClick} />
                <Button text="6" id="six" handleClick={this.handleClick} />
                <Button text="5" id="five" handleClick={this.handleClick} />
                <Button text="4" id="four" handleClick={this.handleClick} />
                <Button text="*" id="multiply" handleClick={this.handleClick} />
                <Button text="3" id="three" handleClick={this.handleClick} />
                <Button text="2" id="two" handleClick={this.handleClick} />
                <Button text="1" id="one" handleClick={this.handleClick} />
                <Button text="-" id="subtract" handleClick={this.handleClick} /> 
                <Button text="." id="decimal" handleClick={this.handleClick} />
                <Button text="0" id="zero" handleClick={this.handleClick} />
                <Button text="=" id="equals" handleClick={this.eval} />
                <Button text="+" id="add" handleClick={this.handleClick} />
                <Button text="CE" id="clear" handleClick={(e) => this.setState({input: "0", output: "0"})} />
            </div>
            

        )
    }
}

export default Buttons;
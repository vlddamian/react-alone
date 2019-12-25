import React from 'react';
import './App.css';
import Operand from "./Operand";

class Sum extends React.Component {

    state = {
        operands : ["a", "b", "c"],
        values : [0, 0, 0],
        sum: 0
    };

    operandValueChanged = (event) => {
        let futureState = {...this.state}
        let idx = futureState
            .operands.findIndex((element) => element === event.target.name);
        if(event.target.value === "") event.target.value = 0;
        futureState.values[idx] = parseInt(event.target.value, 10);
        let futureSum = futureState.values.reduce((sum, el)=> parseInt(sum, 10) + parseInt(el, 10), 0);

        futureState.sum = futureSum;
        this.setState(futureState);
    };

    renderOperands() {
        return this.state.operands.map(
            (operand, idx) => <Operand key = {operand}
                              label = {operand}
                              operandValueChanged = {this.operandValueChanged}
                              operandValue = {this.state.values[idx]}
                        />
        );
    }

    renderSum(){
        return <label> Sum :
            <input
                readOnly
                label = "Sum"
                value = {this.state.sum}/> </label>

    }

    addOperand = () => {
        let futureState = {...this.state};
        futureState.values = futureState.values.concat(0);
        let lastOperand = this.state.operands[this.state.operands.length - 1];
        let nextOperand = String.fromCharCode(lastOperand.charCodeAt(0) + 1);
        futureState.operands = futureState.operands.concat(nextOperand);
        this.setState(futureState);
    };

    removeOperand = () => {
        let futureState = {...this.state};
        futureState.values = [...futureState.values];
        futureState.operands = [...futureState.operands];
        futureState.values.splice(futureState.values.length - 1, 1);
        futureState.operands.splice(futureState.operands.length - 1, 1);

        let futureSum = futureState.values.reduce((sum, el)=> parseInt(sum, 10) + parseInt(el, 10), 0);
        futureState.sum = futureSum;

        this.setState(futureState);
    };

    render() {
        return (
            <div className="App">
                {this.renderOperands()}
                <button onClick={this.addOperand}>Add Operand </button>
                <button onClick={this.removeOperand}>Remove Operand </button>
                {this.renderSum()}

            </div>
        );
    }
}

export default Sum;

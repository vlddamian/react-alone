import React from 'react';
import './App.css';
import Operand from "./Operand";
import { connect } from 'react-redux';

class Sum extends React.Component {

    operandValueChanged = (event) => {
        let futureState = {...this.props.state}
        let idx = futureState
            .operands.findIndex((element) => element === event.target.name);
        if(event.target.value === "") event.target.value = 0;
        futureState.values[idx] = parseInt(event.target.value, 10);

        let futureSum = futureState.values.reduce((sum, el)=> parseInt(sum, 10) + parseInt(el, 10), 0);
        let futureDif = futureState.values.reduce((sum, el)=> parseInt(sum, 10) - parseInt(el, 10), 0);
        futureState.difference = futureDif;
        futureState.sum = futureSum;

        this.props.dispatch(futureState);
    };

    renderOperands() {
        return this.props.state.operands.map(
            (operand, idx) => <Operand key = {operand}
                                       label = {operand}
                                       operandValueChanged = {this.operandValueChanged}
                                       operandValue = {this.props.state.values[idx]}
            />
        );
    }

    renderSum(){
        return <label> Sum :
            <input
                readOnly
                label = "Sum"
                value = {this.props.state.sum}/> </label>

    }

    addOperand = () => {
        let futureState = {...this.props.state};
        futureState.values = futureState.values.concat(0);
        let lastOperand = this.props.state.operands[this.props.state.operands.length - 1];
        let nextOperand = String.fromCharCode(lastOperand.charCodeAt(0) + 1);
        futureState.operands = futureState.operands.concat(nextOperand);
        this.props.dispatch(futureState);
    };

    removeOperand = () => {
        let futureState = {...this.props.state};
        futureState.values = [...futureState.values];
        futureState.operands = [...futureState.operands];
        futureState.values.splice(futureState.values.length - 1, 1);
        futureState.operands.splice(futureState.operands.length - 1, 1);

        let futureSum = futureState.values.reduce((sum, el)=> parseInt(sum, 10) + parseInt(el, 10), 0);
        let futureDif = futureState.values.reduce((sum, el)=> parseInt(sum, 10) - parseInt(el, 10), 0);
        futureState.difference = futureDif;
        futureState.sum = futureSum;


        this.props.dispatch(futureState);
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



const mapStateToProps = (_state /*, ownProps*/) => {
    return {state:_state};
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch: (newState_) => dispatch({type:"GENERIC", newState:newState_ })
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sum)

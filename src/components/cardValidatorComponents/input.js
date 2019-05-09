import React from 'react';
import DisplayCard from "./display";
import PreviousDisplayCard from "./inputPrevious";
import ValidatorsGuiButtons from "./validatorsGUI";

class InputCard extends React.Component{

constructor (props) {
super (props);
this.state = {
	actualInputValue: null,
	informationCardNumberLenght: null,
	previousActualInputValue: null
};
}

valueChange(event) {
	this.setState({actualInputValue: event.target.value});
}

onButtonClickSet() {
	if(this.state.actualInputValue === null){
		this.setState({informationCardNumberLenght: "Please input card number!"});
	}
	this.setState(state => ({ valueToOutput: state.actualInputValue }));
	this.setState(state => ({previousActualInputValue: state.actualInputValue}));
}

render() {
return (
	<div>
		<output>Input card number ></output>
		<input type="number" onChange={this.valueChange.bind(this)}/>
		<button onClick={this.onButtonClickSet.bind(this)}>Save</button>
		<DisplayCard cardNumberToDisplay = {this.state.actualInputValue}/>
		<PreviousDisplayCard cardNumberToDisplay = {this.state.previousActualInputValue}/>
		<ValidatorsGuiButtons actualInputValue = {this.state.actualInputValue}/>
	</div>
)
}

} export default InputCard;
import React from 'react';

class InputCard extends React.Component{

constructor (props) {
super (props);
this.state = {
	actualInputValue: null,
	informationCardNumberLenght: null
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
}


render() {
return (
	<div>
		<output>Input card number ></output>
		<input type="number" onChange={this.valueChange.bind(this)}/>
		<button onClick={this.onButtonClickSet.bind(this)}>Send</button>
	</div>
)
}

} export default InputCard;
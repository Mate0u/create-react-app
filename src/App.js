import React from 'react';
import './App.css';
const luhn = require("luhn");

class App extends React.Component {
	constructor(props) {
	super(props);
	
	this.state = { 
		actualInputValue: null,
		valueToOutput: null,
		informationCardNumberLenght: null
		};
	}
	
	onButtonClickSet() {
		if(this.state.actualInputValue === null){
			this.setState({informationCardNumberLenght: "Please input card number!"});
		}
		this.setState(state => ({ valueToOutput: state.actualInputValue }));
	}
	valueChange(event) {
	this.setState({actualInputValue: event.target.value});
	}
	
render() {
return (
	<div>
		<div>
			
			<div><output>Input card number ></output><input type="number" onChange={this.valueChange.bind(this)} /></div>
			<div><button onClick={this.onButtonClickSet.bind(this)}>Send</button></div>
			<div><output>{this.state.informationCardNumberLenght}</output></div>
			{this.state.valueToOutput && <Child value={this.state.valueToOutput} />}
		</div>
	</div>
);
}
}
class Child extends React.Component{
	constructor (props) {
	super (props);
	this.state = {
		current: Number(this.props),
		lenghtOfNumber: null,
		informationCardNumberLenght: null,
		brandFirstElement: null
	};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.state.fromParent) {
		this.setState({
			current: Number(nextProps.value),
		})
		}
	}

	onButtonCardLengthValidation() {
		if(this.state.current.toString().length === 16){
			this.setState({informationCardNumberLenght: "Card Number has a good length"});
		} else {
			this.setState({informationCardNumberLenght: "Card Number has not a good length"});
		}
	}
	onButtonCardNumberValidation() {
		const is_valid = luhn.validate(this.state.current); // should respond true.
		if(is_valid === true){
			this.setState({informationCardNumberLenght: "Card checksum is true"});
			
		} else {
			this.setState({informationCardNumberLenght: "Card checksum is false"});
		}
	}
	onButtonCardBrandValidation() {
		const brandFirstElement = Array.from(this.state.current.toString());
		  if(brandFirstElement[0] === '4'){
			this.setState({informationCardNumberLenght: "VISA"});
		} else if(brandFirstElement[0] === '3'){
			this.setState({informationCardNumberLenght: "American Express"});
		} else if(brandFirstElement[0] === '5'){
			this.setState({informationCardNumberLenght: "MasterCard"});
		} else{
			this.setState({informationCardNumberLenght: "Card type do not recognized"});
		}
	}

	render() {
		return (
		<div>
		<output>Output:{this.state.current}</output>
			<div>
				<button onClick={this.onButtonCardLengthValidation.bind(this)}>Validate card length</button>
				<button onClick={this.onButtonCardNumberValidation.bind(this)}>Validate card number</button>
				<button onClick={this.onButtonCardBrandValidation.bind(this)}>Validate card brand</button>
			</div>
		<div><output>{this.state.informationCardNumberLenght}</output></div>

		</div>
	);
	}
}

export default App;

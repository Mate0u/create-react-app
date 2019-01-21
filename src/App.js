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
		brandFirstElement: null,
		negativeCounter: null
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
		//Checking id card number have 16 digits
		if(this.state.current.toString().length === 16){
			this.setState({informationCardNumberLenght: "Card Number has a good length"});
			this.setState({
				value: this.state.negativeCounter = 'true',
			});
		} else {
			this.setState({informationCardNumberLenght: "Card Number has not a good length"});
			this.setState({
				value: this.state.negativeCounter = 'false',
			});

		}
	}
	onButtonCardNumberValidation() {
		//algoritm luhn validate a check sum of vard number
		const is_valid = luhn.validate(this.state.current); // should respond true.
		if(is_valid === true){
			this.setState({informationCardNumberLenght: "Card checksum is true"});
			this.setState({
				value: this.state.negativeCounter = 'true',
			});
		} else {
			this.setState({informationCardNumberLenght: "Card checksum is false"});
			this.setState({
				value: this.state.negativeCounter = 'false',
			});
		}
	}
	onButtonCardBrandValidation() {
		//checking is first digit of card number is represent as some of card brand
		const brandFirstElement = Array.from(this.state.current.toString());
		if(brandFirstElement[0] === '4'){
			this.setState({informationCardNumberLenght: "VISA"});
			this.setState({
				value: this.state.negativeCounter = 'true',
			});
		} else if(brandFirstElement[0] === '3'){
			this.setState({informationCardNumberLenght: "American Express"});
			this.setState({
				value: this.state.negativeCounter = 'true',
			});
		} else if(brandFirstElement[0] === '5'){
			this.setState({informationCardNumberLenght: "MasterCard"});
			this.setState({
				value: this.state.negativeCounter = 'true',
			});
		} else{
			this.setState({informationCardNumberLenght: "Card type do not recognized"});
			this.setState({
				value: this.state.negativeCounter = 'false',
			});
		}
	}
	allValidateInOne() {
		this.onButtonCardLengthValidation();
		this.onButtonCardNumberValidation();
		this.onButtonCardBrandValidation();

		if (this.state.negativeCounter === 'false' ){
			this.setState({informationCardNumberNotCorrect: "One of card number validator result is wrong"});
		} else {
			this.setState({informationCardNumberNotCorrect: "All of card number validator results are green"});
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
				<button onClick={this.allValidateInOne.bind(this)}>Validate card</button>
			</div>
		<div><output>{this.state.informationCardNumberLenght}</output></div>
		<div><output>{this.state.informationCardNumberNotCorrect}</output></div>

		</div>
	);
	}
}

export default App;

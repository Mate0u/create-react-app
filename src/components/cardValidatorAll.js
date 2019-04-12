import React from 'react';
import '../App.js';
import InputCard from'../components/cardValidatorComponents/input'

const luhn = require("luhn");

class Child extends React.Component{

	constructor (props) {
	super (props);
		this.state = {
			current: Number(this.props),
			lenghtOfNumber: null,
			informationCardNumberLenght: null,
			informationCheckSum: null,
			informationBrand: null,
			brandFirstElement: null,
			resultLenght: null,
			resultCheckSum: null,
			resultBrand: null,
			actualInputValue: null,
		valueToOutput: null
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

	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.state.fromParent) {
		this.setState({
			current: Number(nextProps.value),
		})
		}
	}
	
	clearingPrintedMessage() {
		//clean all previous message
		// this.setState({informationBrand: null});
		// this.setState({informationCardNumberLenght: null});
		// this.setState({informationCheckSum: null});
		// this.setState({informationCardNumberNotCorrect: null});
	}
	
	onButtonCardLengthValidation() {
		//clean all previous message
		this.clearingPrintedMessage();
		//Checking id card number have 16 digits
		if(this.state.current.toString().length === 16){
			this.setState({informationCardNumberLenght: "Card Number has a good length"});
			this.setState({resultLenght: 'true'});
		} else {
			this.setState({informationCardNumberLenght: "Card Number has not a good length"});
			this.setState({
				value: this.state.resultLenght = 'false',
			});
	
		}
	}
	onButtonCardNumberValidation() {
		//clean all previous message
		this.clearingPrintedMessage();
	
		//algoritm luhn validate a check sum of vard number
		const is_valid = luhn.validate(this.state.current); //should respond true.
		if(is_valid === true){
			this.setState({informationCheckSum: "Card checksum is true"});
			this.setState({
				value: this.state.resultCheckSum = 'true',
			});
		} else {
			this.setState({informationCheckSum: "Card checksum is false"});
			this.setState({
				value: this.state.resultCheckSum = 'false',
			});
		}
	}
	onButtonCardBrandValidation() {
		//clean all previous message
		this.clearingPrintedMessage();
		//checking is first digit of card number is represent as some of card brand
		const brandFirstElement = Array.from(this.state.current.toString());
		if(brandFirstElement[0] === '4'){
			this.setState({informationBrand: "VISA is brand of card"});
			this.setState({
				value: this.state.resultBrand = 'true',
			});
		} else if(brandFirstElement[0] === '3'){
			this.setState({informationBrand: "American Express is brand of card"});
			this.setState({
				value: this.state.resultBrand = 'true',
			});
		} else if(brandFirstElement[0] === '5'){
			this.setState({informationBrand: "MasterCard is brand of card"});
			this.setState({
				value: this.state.resultBrand = 'true',
			});
		} else{
			this.setState({informationBrand: "Card brand do not recognized"});
			this.setState({
				value: this.state.resultBrand = 'false',
			});
		}
	}
	allValidateInOne() {
		//clean all previous message
		this.clearingPrintedMessage();
		
		this.onButtonCardLengthValidation();
		this.onButtonCardNumberValidation();
		this.onButtonCardBrandValidation();
	
		//if one result is wrong print only wrong, if all results are ok then print all
		//TODO
	
		//message about all results
		if (this.state.resultLenght === 'false' || this.state.resultBrand === 'false' || this.state.resultCheckSum === 'false') {
			this.setState({ informationCardNumberNotCorrect: "One of card number validator result is wrong" });
		} else {
			this.setState({ informationCardNumberNotCorrect: "All of card number validator results are green" });
		};
	}
	
		// render() {
		// 	return (
		// 	<div>
		// 		<div>
		// 			<div><output>Input card number ></output><input type="number" onChange={this.valueChange.bind(this)}/><button onClick={this.onButtonClickSet.bind(this)}>Send</button></div>
		// 			<div><output>{this.state.informationCardNumberLenght}</output></div>
		// 			{this.state.valueToOutput && <Child value={this.state.valueToOutput} />}
		// 		</div>
		// 		<div>
		// 			<output>Output:{this.state.current}</output>
		// 			<div>
		// 				<button onClick={this.onButtonCardLengthValidation.bind(this)}>Validate card length</button>
		// 				<button onClick={this.onButtonCardNumberValidation.bind(this)}>Validate card number</button>
		// 				<button onClick={this.onButtonCardBrandValidation.bind(this)}>Validate card brand</button>
		// 				<button onClick={this.allValidateInOne.bind(this)}>Validate card</button>
		// 			</div>
		// 		<div><output>{this.state.informationCardNumberNotCorrect}</output></div>
		// 		<div><output>{this.state.informationCardNumberLenght}</output></div>
		// 		<div><output>{this.state.informationBrand}</output></div>
		// 		<div><output>{this.state.informationCheckSum}</output></div>
		// 		</div>
		// 	</div>
		// )
		// }


	render() {
	return (
		<div>
			<InputCard />
			
		</div>
	)
	}

}
export default Child;
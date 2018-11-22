import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
	super(props);
	
	this.state = { 
		actualInputValue: null,
		valueToOutput: null
		};
	}
	
	onButtonClickSet() {
	this.setState(state => ({ valueToOutput: state.actualInputValue }));
	}
	valueChange(event) {
	this.setState({actualInputValue: event.target.value});
	}
	
render() {
return (
	<div>
		<div>
			
			<div><text>Input card number ></text><input type="number" onChange={this.valueChange.bind(this)} /></div>
			<div><button onClick={this.onButtonClickSet.bind(this)}>Send</button></div>
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
				previous: Number(this.props),
				current: Number(this.props),
				lenghtOfNumber: null
			};
			}
	
			componentWillReceiveProps(nextProps) {
				if (nextProps.value != this.state.fromParent) {
				this.setState({
					previous: Number(nextProps.value),
					current: Number(nextProps.value),
				})
				}
			}
	
			onButtonClickPlus() {
			const cos = this.state.lenghtOfNumber.toString();
			if(cos.length === 1){
				return(
					<output>Lenght of card number is ok</output>
				);
			}
			}
	
			render() {
				return (
				<div>
				<output>Output:{this.state.previous}</output>
				<div><button onClick={this.onButtonClickPlus.bind(this)}>Validate</button></div>
				</div>
			);
			}
		}
	

export default App;

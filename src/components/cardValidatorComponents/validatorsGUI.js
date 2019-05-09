import React from "react";

class validatorsGuiButtons extends React.Component{

constructor (props) {
super (props);
	this.state = {
		informationCardNumberLenght: null
	};
}

onButtonCardLengthValidation() {
	//Checking id card number have 16 digits
	if(this.props.actualInputValue.toString().length === 16){
		this.setState({informationCardNumberLenght: "Card Number has a good length"});
	} else {
		this.setState({informationCardNumberLenght: "Card Number has not a good length"});
	}
}

render(){
return(
	<div>
		<div>
				<button onClick={this.onButtonCardLengthValidation.bind(this)}>Validacja</button>
		</div>
		<div>
				<ul>
					<li><output>{this.state.informationCardNumberLenght}</output></li>
				</ul>
		</div>
	</div>
)
}
} export default validatorsGuiButtons;



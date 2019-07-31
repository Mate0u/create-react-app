import React from "react";

class validatorsGuiButtons extends React.Component{

constructor (props) {
super (props);
this.state = {
 informationCardNumberLenght: null,
 infromationAboutCardNumberLenghtValidator: null
};
}

onButtonClickSet() {
if(this.props.actualInputValue === null){
 this.setState({infromationAboutCardNumberLenghtValidator: "Please input card number first!"});
} else {
 this.setState({infromationAboutCardNumberLenghtValidator: ""});
 this.MetodValidationLenght();
}
 this.setState(state => ({valueToOutput: state.actualInputValue }));
 this.setState(state => ({previousActualInputValue: state.actualInputValue}));
}

// //Checking if card number have 16 digits
MetodValidationLenght(){
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
 <button onClick={this.onButtonClickSet.bind(this)}>Validate</button>
 <output>{this.state.infromationAboutCardNumberLenghtValidator}</output>
 <div><output>{this.state.informationCardNumberLenght}</output></div>
 </div>
</div>
)
}

} export default validatorsGuiButtons;

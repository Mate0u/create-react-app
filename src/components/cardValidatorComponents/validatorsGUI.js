import React from "react";
const luhn = require("luhn");

class validatorsGuiButtons extends React.Component{

constructor (props) {
super (props);
this.state = {
 lengthOfCardNumber: 16,
 checkSum: luhn.validate(this.props.actualInputValue),
 informationCheckSum: null,
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
 this.MetodValidationCheckSum();
}
 this.setState(state => ({valueToOutput: state.actualInputValue }));
 this.setState(state => ({previousActualInputValue: state.actualInputValue}));
}

//Checking if card number have 16 digits
MetodValidationLenght(){
if(this.props.actualInputValue.toString().length === this.state.lengthOfCardNumber){
 this.setState({informationCardNumberLenght: "Card Number has a good length"});
} else {
 this.setState({informationCardNumberLenght: "Card Number has not a good length"});
}
}

//algoritm luhn validate a check sum of vard number
//TODO: on first validate checksum is showing false
MetodValidationCheckSum(){
this.setState({checkSum: luhn.validate(this.props.actualInputValue)}, () => {
 if(this.state.checkSum){
  this.setState({informationCheckSum: "Card checksum is true"});
 } else {
  this.setState({informationCheckSum: "Card checksum is false"});
 }
});
}

render(){
return(
<div>
 <div>
 <button onClick={this.onButtonClickSet.bind(this)}>Validate</button>
 <output>{this.state.infromationAboutCardNumberLenghtValidator}</output>
 <div><output>{this.state.informationCardNumberLenght}</output></div>
 <div><output>{this.state.informationCheckSum}</output></div>
 </div>
</div>
)
}

} export default validatorsGuiButtons;

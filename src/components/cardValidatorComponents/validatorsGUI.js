import React from "react";
import MetodValidationLenght from './metodsForValidation/metodValidationLenght';

class validatorsGuiButtons extends React.Component{

constructor (props) {
super (props);
this.state = {
 informationCardNumberLenght: null,
 infromationAboutCardNumberLenghtValidator: null
};
}

onButtonClickSet() {
if(this.state.infromationAboutCardNumberLenghtValidator === null){
    this.setState({infromationAboutCardNumberLenghtValidator: "Please valiate"});
} else {
    this.setState({infromationAboutCardNumberLenghtValidator: ""});
}
    this.setState(state => ({valueToOutput: state.actualInputValue }));
    this.setState(state => ({previousActualInputValue: state.actualInputValue}));
    MetodValidationLenght(actualInputValue);
}

render(){
return(
<div>
 <div>
 <button onClick={this.onButtonClickSet.bind(this)}>Validate</button>
 <output>{this.state.informationCardNumberLenght}</output>

 {/* <MetodValidationLenght actualInputValue = {this.state.actualInputValue}/> */}
 </div>
</div>
)
}

} export default validatorsGuiButtons;

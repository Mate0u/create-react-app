import React from "react";
import metodValidationLenght from './metodsForValidation/metodValidationLenght';

class validatorsGuiButtons extends React.Component{

constructor (props) {
super (props);
this.state = {
 informationCardNumberLenght: null
};
}

render(){
return(
<div>
 <div>
  <button onClick={metodValidationLenght.bind(this)}>Validacja</button>
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

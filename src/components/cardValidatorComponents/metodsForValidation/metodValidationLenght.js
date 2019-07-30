import React from 'react';

function metodValidationLenght ({cardNumber}) {

//Checking id card number have 16 digits
if(cardNumber.toString().length === 16){
 this.setState({informationCardNumberLenght: "Card Number has a good length"});
} else {
 this.setState({informationCardNumberLenght: "Card Number has not a good length"});
}

return (
<div>
 <output>aaa</output>
</div>
)

} export default metodValidationLenght;

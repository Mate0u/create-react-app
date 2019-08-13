import React from "react";
import Button from '@material-ui/core/Button';

const luhn = require("luhn");

class validatorsGuiButtons extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
   lengthOfCardNumber: 16,
   checkSum: null,
   cardBrand: null,
   informationBrand: null,
   informationCheckSum: null,
   informationCardNumberLenght: null,
   infromationAboutCardNumberLenghtValidator: null
  };
 }

 onButtonClickSet() {
  if (this.props.actualInputValue === null) {
   this.setState({ infromationAboutCardNumberLenghtValidator: "Please input card number first!" });
  } else {
   this.setState({ infromationAboutCardNumberLenghtValidator: "" });
   this.MetodValidationLenght();
   this.MetodValidationCheckSum();
   this.onButtonCardBrandValidation();
  }
  this.setState(state => ({ valueToOutput: state.actualInputValue }));
  this.setState(state => ({ previousActualInputValue: state.actualInputValue }));
 }

 //Checking if card number have 16 digits
 MetodValidationLenght() {
  if (this.props.actualInputValue.toString().length === this.state.lengthOfCardNumber) {
   this.setState({ informationCardNumberLenght: "Card Number has a good length" });
  } else {
   this.setState({ informationCardNumberLenght: "Card Number has not a good length" });
  }
 }

 //algoritm luhn validate a check sum of vard number
 MetodValidationCheckSum() {
  this.setState({ checkSum: luhn.validate(this.props.actualInputValue) }, () => {
   if (this.state.checkSum) {
    this.setState({ informationCheckSum: "Card checksum is true" });
   } else {
    this.setState({ informationCheckSum: "Card checksum is false" });
   }
  });
 }

 //checking is first digit of card number is represent as some of card brand
 onButtonCardBrandValidation() {
  this.setState({ cardBrand: Array.from(this.props.actualInputValue.toString()) }, () => {
   if (this.state.cardBrand[0] === '4') {
    this.setState({ informationBrand: "VISA is brand of card" });
   } else if (this.state.cardBrand[0] === '3') {
    this.setState({ informationBrand: "American Express is brand of card" });
   } else if (this.state.cardBrand[0] === '5') {
    this.setState({ informationBrand: "MasterCard is brand of card" });
   } else {
    this.setState({ informationBrand: "Card brand do not recognized" });
   }
  });
 }

 render() {
  return (
   <div>
    <div>
     <Button variant="contained" color="primary" onClick={this.onButtonClickSet.bind(this)}>Validate</Button>
     <div><output>{this.state.infromationAboutCardNumberLenghtValidator}</output></div>
     <div><output>{this.state.informationCardNumberLenght}</output></div>
     <div><output>{this.state.informationCheckSum}</output></div>
     <div><output>{this.state.informationBrand}</output></div>
    </div>
   </div>
  )
 }

} export default validatorsGuiButtons;

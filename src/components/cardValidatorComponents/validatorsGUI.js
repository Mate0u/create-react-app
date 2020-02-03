import React from "react";
import Button from "@material-ui/core/Button";
import SnackBars from "../../materialUIcomponents/snackBars";

const luhn = require("luhn");

class validatorsGuiButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lengthOfCardNumber: 16,
      checkSum: null,
      cardBrandCode: null,
      selectedcardBrandCode: null,
      informationBrand: null,
      informationCheckSum: null,
      informationCardNumberLenght: null,
      infromationAboutCardNumberLenghtValidator: null,
      informationCardComparing: null,
      selectedBrand: null,
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: null
    };
  }

onButtonClickSet() {
if (this.props.actualInputValue === null) {
  this.setState({ infromationAboutCardNumberLenghtValidator: "Please input card number first!" });
  this.setState({value1: true});
} else {
  this.setState({ infromationAboutCardNumberLenghtValidator: "" });
  this.MetodValidationLenght();
  this.MetodValidationCheckSum();
  this.onButtoncardBrandCodeValidation();
  this.MetodBrandCompare();
  this.setState({value1: false});
}
this.setState(state => ({ valueToOutput: state.actualInputValue }));
this.setState(state => ({ previousActualInputValue: state.actualInputValue }));
}

// checking if brand from number is the same like selected 
MetodBrandCompare() {
this.setState(
  { cardBrandCode: Array.from(this.props.actualInputValue.toString()) },
  () => {
    if (this.state.cardBrandCode[0] === "4" && this.props.selectedBrand === "Visa") {
      this.setState({ informationCardComparing: "Compering brand: success"})
      this.setState({value2: true});
    } else if (this.state.cardBrandCode[0] === "3" && this.props.selectedBrand === "American Express") {
       this.setState({ informationCardComparing: "Compering brand: success" });
       this.setState({value2: true});
    } else if (this.state.cardBrandCode[0] === "5" && this.props.selectedBrand === "MasterCard") {
      this.setState({ informationCardComparing: "Compering brand: success" });
      this.setState({value2: true});
    } else if (this.state.cardBrandCode[0] !== "0" && this.props.selectedBrand === "Other") { 
      this.setState({ informationCardComparing: "Compering brand: block" });  
      this.setState({value2: true});
  } else { 
    this.setState({ informationCardComparing: "Compering brand: failed" });
    this.setState({value2: false});
    }
  }
);
}

  //Checking if card number have 16 digits
  MetodValidationLenght() {
    if (this.props.actualInputValue.toString().length === this.state.lengthOfCardNumber) {
      this.setState({informationCardNumberLenght: "Card Number has a good length"});
      this.setState({value3: true});
    } else {
      this.setState({
        informationCardNumberLenght: "Card Number has not a good length"
      });
      this.setState({value3: true});
    }
  }

  //algoritm luhn validate a check sum of vard number
  MetodValidationCheckSum() {
    this.setState(
      { checkSum: luhn.validate(this.props.actualInputValue) },
      () => {
        if (this.state.checkSum) {
          this.setState({ informationCheckSum: "Card checksum is true" });
          this.setState({value4: true});
        } else {
          this.setState({ informationCheckSum: "Card checksum is false" });
          this.setState({value4: true});
        }
      }
    );
  }

  //checking is first digit of card number is represent as some of card brand
  onButtoncardBrandCodeValidation() {
    this.setState(
      { cardBrandCode: Array.from(this.props.actualInputValue.toString()) },
      () => {
        if (this.state.cardBrandCode[0] === "4") {this.setState({ informationBrand: "VISA is brand of card" });
        this.setState({value5: true});
        } else if (this.state.cardBrandCode[0] === "3") { this.setState({informationBrand: "American Express is brand of card" });
        this.setState({value5: true});
        } else if (this.state.cardBrandCode[0] === "5") { this.setState({ informationBrand: "MasterCard is brand of card" });
        this.setState({value5: true});
        } else { this.setState({ informationBrand: "Card brand do not recognized" });
        this.setState({value5: true});
        }
      }
    );
  }

render() {
return (
<div>
  <div>
    <Button
      variant="contained"
      color="primary"
      onClick={this.onButtonClickSet.bind(this)}
    >
      Validate
    </Button>
    <SnackBars value={this.state.value1} inforamtionToPrint={this.state.infromationAboutCardNumberLenghtValidator}/>
    <SnackBars value={this.state.value2} inforamtionToPrint={this.state.informationCardComparing}/>
    <SnackBars value={this.state.value3} inforamtionToPrint={this.state.informationCardNumberLenght}/>
    <SnackBars value={this.state.value4} inforamtionToPrint={this.state.informationCheckSum}/>
    <SnackBars value={this.state.value5} inforamtionToPrint={this.state.informationBrand}/>

      <div>
      <output>
        {this.state.infromationAboutCardNumberLenghtValidator}
      </output>
      </div>
    <div>
      <output>{this.state.informationCardNumberLenght}</output>
    </div>
    <div>
      <output>{this.state.informationCheckSum}</output>
    </div>
    <div>
      <output>{this.state.informationBrand}</output>
    </div>
    <div>
      <output>{this.state.informationCardComparing}</output>
    </div>
  </div>
</div>
);
}

}
export default validatorsGuiButtons;

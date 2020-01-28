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
      value: null
    };
  }

onButtonClickSet() {
if (this.props.actualInputValue === null) {
  this.setState({ infromationAboutCardNumberLenghtValidator: "Please input card number first!" });
  this.setState({value: false});
} else {
  this.setState({ infromationAboutCardNumberLenghtValidator: "" });
  this.MetodValidationLenght();
  this.MetodValidationCheckSum();
  this.onButtoncardBrandCodeValidation();
  this.MetodBrandCompare();
  this.setState({value: true});
}
this.setState(state => ({ valueToOutput: state.actualInputValue }));
this.setState(state => ({ previousActualInputValue: state.actualInputValue }));
}

  // checking if brand from number is the same like selected 
  MetodBrandCompare() {
    this.setState(
      { cardBrandCode: Array.from(this.props.actualInputValue.toString()) },
      () => {
        if (this.state.cardBrandCode[0] === "4" && this.props.selectedBrand === "Visa") {this.setState({ informationCardComparing: "Compering brand: success" });
        } else if (this.state.cardBrandCode[0] === "3" && this.props.selectedBrand === "American Express") { this.setState({ informationCardComparing: "Compering brand: success" });
        } else if (this.state.cardBrandCode[0] === "5" && this.props.selectedBrand === "MasterCard") { this.setState({ informationCardComparing: "Compering brand: success" });
        } else if (this.state.cardBrandCode[0] !== "0" && this.props.selectedBrand === "Other") { this.setState({ informationCardComparing: "Compering brand: block" });  
      } else { this.setState({ informationCardComparing: "Compering brand: failed" });
        }
      }
    );
  }

  //Checking if card number have 16 digits
  MetodValidationLenght() {
    if (
      this.props.actualInputValue.toString().length ===
      this.state.lengthOfCardNumber
    ) {
      this.setState({
        informationCardNumberLenght: "Card Number has a good length"
      });
    } else {
      this.setState({
        informationCardNumberLenght: "Card Number has not a good length"
      });
    }
  }

  //algoritm luhn validate a check sum of vard number
  MetodValidationCheckSum() {
    this.setState(
      { checkSum: luhn.validate(this.props.actualInputValue) },
      () => {
        if (this.state.checkSum) {
          this.setState({ informationCheckSum: "Card checksum is true" });
        } else {
          this.setState({ informationCheckSum: "Card checksum is false" });
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
        } else if (this.state.cardBrandCode[0] === "3") { this.setState({informationBrand: "American Express is brand of card" });
        } else if (this.state.cardBrandCode[0] === "5") { this.setState({ informationBrand: "MasterCard is brand of card" });
        } else { this.setState({ informationBrand: "Card brand do not recognized" });
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
    <SnackBars value={this.state.value} inforamtionToPrint={this.state.informationCardNumberLenght}/>
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

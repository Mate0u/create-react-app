import React from "react";
import DisplayCard from "./display";
import PreviousDisplayCard from "./inputPrevious";
import ValidatorsGuiButtons from "./validatorsGUI";
import SnackbarError from "../../materialUIcomponents/test";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";

//Style for material components Input
const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #19e668",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#19e668",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

//Style for material rest component components
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  close: {
    padding: theme.spacing(0.5)
  }
}));

// const open = React.useState(false);
class InputCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualInputValue: null,
      informationCardNumberLenght: null,
      previousActualInputValue: null,
      cardMonth: null,
      cardYear: null,
      cardBrand: null,
      previousCardMonth: null,
      previousCardYear: null,
      previousCardBrand: null,
      visa: null,
      masterCard: null,
      americanExpress: null,
      otherBrand: null,
      january: null,
      february: null,
      march: null
    };
  }

  //event inputing card number
  valueChange(event) {
    this.setState({ actualInputValue: event.target.value });
  }

  //event selecting card expire month
  valueMonthChange(event) {
    this.setState({ cardMonth: event.target.value });
  }

  //event selecting card expire year
  valueYearChange(event) {
    this.setState({ cardYear: event.target.value });
  }

  //event selecting card brand
  valueBrandChange(event) {
   this.setState({ cardBrand: event.target.value });
 }

  onButtonClickSet() {
    if (this.state.actualInputValue === null) {
      return <SnackbarError />;
    } else {
      this.setState({ informationCardNumberLenght: "" });
    }
    //saving values for previous and actuall
    //card number
    this.setState(state => ({ valueToOutput: state.actualInputValue }));
    this.setState(state => ({ previousActualInputValue: state.actualInputValue}));
    //card month expire
    this.setState(state => ({ valueToOutput: state.cardMonth }));
    this.setState(state => ({ previousCardMonth: state.cardMonth }));
    //card year expire
    this.setState(state => ({ valueToOutput: state.cardYear}));
    this.setState(state => ({ previousCardYear: state.cardYear }));
    //car brand
    this.setState(state => ({ valueToOutput: state.cardBrand}));
    this.setState(state => ({ previousCardBrand: state.cardBrand}));
  };

  Greeting() {
    if (this.state.actualInputValue === null) {
    } else {
      return;
    }
  };

  render() {
    return (
      <form className={useStyles.root}>
        <div class="row">
          <div class="col-sm-3">
            <FormControl
              onChange={this.valueChange.bind(this)}
              className={useStyles.margin}
            >
              <InputLabel>Input card number</InputLabel>
              <BootstrapInput name="Number" />
            </FormControl>
          </div>
          <div class="col-sm-2">
            <FormControl className={useStyles.margin}>
              <InputLabel>Month</InputLabel>
              <NativeSelect
                onClick={this.valueMonthChange.bind(this)}
                input={<BootstrapInput name="Month" />}
              >
                <option value="" />
                <option value={this.state.january}>January</option>
                <option value={this.state.february}>February</option>
                <option value={this.state.march}>March</option>
              </NativeSelect>
            </FormControl>
          </div>
          <div class="col-sm-2">
            <FormControl className={useStyles.margin}>
              <InputLabel>Year</InputLabel>
              <NativeSelect
                onClick={this.valueYearChange.bind(this)}
                input={<BootstrapInput name="Year" />}
              >
                <option value="" />
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
              </NativeSelect>
            </FormControl>
          </div>
          <div class="col-sm-2">
            <FormControl className={useStyles.margin}>
              <InputLabel>Brand</InputLabel>
              <NativeSelect
                onClick={this.valueBrandChange.bind(this)}
                input={<BootstrapInput name="Brand" />}
              >
                <option value="" />
                <option value={this.state.visa}>Visa</option>
                <option value={this.state.masterCard}>MasterCard</option>
                <option value={this.state.americanExpress}>American Express</option>
                <option value={this.state.otherBrand}>Other</option>
              </NativeSelect>
            </FormControl>
          </div>
        </div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.onButtonClickSet.bind(this)}
          onClickCapture={this.Greeting.bind(this)}
        >
          Save
        </Button>
        {/* <Greeting /> */}
        <DisplayCard
          cardNumberToDisplay={this.state.actualInputValue}
          monthToDisplay={this.state.cardMonth}
          yearToDisplay={this.state.cardYear}
          brandToDisplay={this.state.cardBrand}
        />
        <PreviousDisplayCard
          cardNumberToDisplay={this.state.previousActualInputValue}
          monthToDisplay={this.state.previousCardMonth}
          yearToDisplay={this.state.previousCardYear}
          brandToDisplay={this.state.previousCardBrand}
        />
        <ValidatorsGuiButtons actualInputValue={this.state.actualInputValue} selectedBrand={this.state.cardBrand} />
      </form>
    );
  }
}
export default InputCard;

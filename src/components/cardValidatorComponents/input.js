import React from 'react';
import DisplayCard from "./display";
import PreviousDisplayCard from "./inputPrevious";
import ValidatorsGuiButtons from "./validatorsGUI";
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
 root: {
  'label + &': {
   marginTop: theme.spacing(3),
  },
 },
 input: {
  borderRadius: 4,
  position: 'relative',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid #19e668',
  fontSize: 16,
  padding: '10px 26px 10px 12px',
  transition: theme.transitions.create(['border-color', 'box-shadow']),
  '&:focus': {
   borderRadius: 4,
   borderColor: '#19e668',
   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  },
 },
}))(InputBase);

const useStyles = makeStyles(theme => ({
 root: {
  display: 'flex',
  flexWrap: 'wrap',
 },
 margin: {
  margin: theme.spacing(1),
 },
}));

class InputCard extends React.Component {

 constructor(props) {
  super(props);
  this.state = {
   actualInputValue: null,
   informationCardNumberLenght: null,
   previousActualInputValue: null,
   cardMonth: null,
   cardYear: null,
  };
 }

 valueChange(event) {
  this.setState({ actualInputValue: event.target.value });
 }

 onButtonClickSet() {
  if (this.state.actualInputValue === null) {
   this.setState({ informationCardNumberLenght: "Please input card number!" });
  } else {
   this.setState({ informationCardNumberLenght: "" });
  }
  this.setState(state => ({ valueToOutput: state.actualInputValue }));
  this.setState(state => ({ previousActualInputValue: state.actualInputValue }));
 }

 render() {
  return (
   <form className={useStyles.root}>
    <div class="row">
     <div class="col-sm-3">
      <FormControl onChange={this.valueChange.bind(this)} className={useStyles.margin}>
       <InputLabel>Input card number</InputLabel>
       <BootstrapInput name="Number"/>
      </FormControl>
     </div>
     <div class="col-sm-2">
      <FormControl className={useStyles.margin}>
       <InputLabel>Month</InputLabel>
       <NativeSelect input={<BootstrapInput name="Month"/>}>
        <option value="" />
        <option value={1}>January</option>
        <option value={2}>February</option>
        <option value={3}>March</option>
       </NativeSelect>
      </FormControl>
     </div>
     <div class="col-sm-2">
      <FormControl className={useStyles.margin}>
       <InputLabel>Year</InputLabel>
       <NativeSelect input={<BootstrapInput name="Year"/>}>
        <option value="" />
        <option value={2019}>2019</option>
        <option value={2020}>2020</option>
        <option value={2021}>2021</option>
       </NativeSelect>
      </FormControl>
     </div>
    </div>
      <Button variant="contained" color="secondary" onClick={this.onButtonClickSet.bind(this)}>Save</Button>
      <output>{this.state.informationCardNumberLenght}</output>
      <DisplayCard cardNumberToDisplay={this.state.actualInputValue} monthToDisplay={this.state.cardMonth} yearToDisplay={this.state.cardYear} />
      <PreviousDisplayCard cardNumberToDisplay={this.state.previousActualInputValue} monthToDisplay={this.state.cardMonth} yearToDisplay={this.state.cardYear}/>
      <ValidatorsGuiButtons actualInputValue={this.state.actualInputValue} />
    
   </form>
  )
 }

} export default InputCard;
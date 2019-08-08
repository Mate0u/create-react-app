import React from "react";
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import { makeStyles } from '@material-ui/core/styles';

const luhn = require("luhn");

const useStyles = makeStyles(theme => ({
 root: {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
 },
 chip: {
  margin: theme.spacing(1),
 },
 demo: {
  backgroundColor: theme.palette.background.paper,
 },
 title: {
  margin: theme.spacing(4, 0, 2),
 },
}));

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
     <Button variant="contained" color="primary" onClick={this.onButtonClickSet.bind(this)}>
      Validate
     </Button>
     <div><Chip variant="outlined" size="small" label={this.state.infromationAboutCardNumberLenghtValidator} className={useStyles.chip} /></div>
     <div><output>{this.state.informationCardNumberLenght}</output></div>
     <div><output>{this.state.informationCheckSum}</output></div>
     <div><output>{this.state.informationBrand}</output></div>
    </div>
    <Grid container spacing={2}>
     <Grid item xs={12} md={6}>
      <Typography variant="h6" className={useStyles.title}>
       Avatar with text
          </Typography>
      {/* <div className={useStyles.demo}> */}
       {/* <List dense={dense}>
         <ListItem>
          <ListItemAvatar>
           <Avatar>
            <FolderIcon />
           </Avatar>
          </ListItemAvatar>
          <ListItemText
           primary="Single-line item"
           secondary={secondary ? 'Secondary text' : null}
          />
         </ListItem> */}
       {/* </List>
      </div> */}
     </Grid>
    </Grid>
   </div>
  )
 }

} export default validatorsGuiButtons;

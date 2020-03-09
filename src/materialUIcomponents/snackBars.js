import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleSnackbar({value, severity, inforamtionToPrint}) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  console.log("value",value);
  
  var status = value;
  console.log("status",status);

return (
  <div className={classes.root}>
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={status}
      autoHideDuration={5}
    >
      <Alert severity={severity}>
      <output>{inforamtionToPrint}</output>
      </Alert>
    </Snackbar> 
  </div>
);
}
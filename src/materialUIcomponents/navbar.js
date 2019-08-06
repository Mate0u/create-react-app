import React from 'react';
import TypoGraphy from '@material-ui/core/TypoGraphy';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
 button: {
   margin: theme.spacing(1),
 }
}));

const Home = () => {
const classes = useStyles();

return (
<div>
<AppBar color="primary" position="static">
 <Toolbar>
  <TypoGraphy variant="title" color="inherit">
   QA world
  </TypoGraphy>
  <Button variant="contained" href="/" color="primary" className={classes.button}>
   Home
  </Button>
  <Button variant="contained" href="/card" color="secondary" className={classes.button}>
   Card
  </Button>
 </Toolbar>
</AppBar>
</div>
);
}

export default Home;
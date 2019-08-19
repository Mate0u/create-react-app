import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
 button: {
   margin: theme.spacing(1),
 }
}));

const Home = () => {
const classes = useStyles();

return (
<div>
<output>
 Placeholder
</output>
</div>
);
}

export default Home;

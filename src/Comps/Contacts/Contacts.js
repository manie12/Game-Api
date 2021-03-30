import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Styles';
import Contact from './Contact';

export default function Contacts() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.header} position="fixed" color="primary">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.typography2} variant="h6">
                        CONTACT
                   </Typography>

                    <Typography component={Link} to="/" className={classes.typography} >
                        VIDEO  GAMES
                    </Typography>
                    <Typography component={Link} to="/contacts" className={classes.typography1} >
                        CONTACT
                    </Typography>

                </Toolbar>
            </AppBar>
            <Contact />
        </div>
    )
}

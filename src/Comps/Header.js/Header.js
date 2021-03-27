import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useStyles } from './Styles';

export default function Header() {
    const classes = useStyles();
    return (
        <div  >
            <AppBar className={classes.header} position="fixed" color="primary">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.typography2} variant="h6">
                        VIDEO
                   </Typography>

                    <Typography className={classes.typography} >
                        VIDEO  GAMES
                    </Typography>
                    <Typography className={classes.typography1} >
                        CONTACT
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

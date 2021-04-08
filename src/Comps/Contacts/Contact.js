import React from 'react';
import { Typography, TextField, InputLabel, Button, Grid } from '@material-ui/core';
import { useStyles } from './Styles';


export default function Contact() {
    const classes = useStyles();
    return (
        <Grid container className={classes.headerBottom}>
            <Grid item xs={12} >
                <Typography variant="h6" className={classes.touch}>
                    GET IN TOUCH
                </Typography>

            </Grid>
            <Grid>
                <Typography className={classes.touch} >
                    hjkh ghjdfgh ehuig    vhguhjvj v jv eui ge gj ghfdnv  gjgjeiotgui dfjguihe o  ijgui
                    g uthutghdjv gjitupv dkfgjiosrjutpo gdgoeptu ggfnjrtu  dfjngjg ohtui  rhjngeuh t hg
                    ghweur ghuehrg segrjgu gnwuh gjhe5iu gi4h5t trhe4u  .
           </Typography>

            </Grid>
            <Grid fullWidth container className={classes.bgColor} spacing={2} style={{ margin: '3em' }}>
                <Grid item xs={12}>
                    <Typography className={classes.touch}>
                        Contact Form
               </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <InputLabel style={{ textAlign: 'start', color: '#fcfcfc' }}>NAME*</InputLabel>
                    <TextField
                        color="#fcfcfc"
                        fullWidth
                        id=""
                        label="Name"
                        className={classes.input}
                    />

                </Grid>
                <Grid item xs={12} lg={6}>
                    <InputLabel style={{ textAlign: 'start', color: '#fcfcfc' }} >Email Address*</InputLabel>
                    <TextField
                        fullWidth
                        id=""
                        label="Email"
                        className={classes.input}

                    />

                </Grid>
                <Grid item xs={12} >
                    <InputLabel className={classes.touch}>Message*</InputLabel>
                    <TextField
                        fullWidth
                        id=""
                        label=""
                        multiline=""
                        className={classes.input}

                    />

                </Grid>
                <Grid item style={{ textAlign: "end" }} xs={12}>
                    <Button className={classes.bottom} variant="contained" color="default">
                        send
                </Button>

                </Grid>
            </Grid>
        </Grid>
    )
}

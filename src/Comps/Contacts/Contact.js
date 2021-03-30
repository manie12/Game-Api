import React from 'react';
import { Typography, TextField, InputLabel, Button, Grid } from '@material-ui/core';
import { useStyles } from './Styles';


export default function Contact() {
    const classes = useStyles();
    return (
        <Grid container className={classes.headerBottom}>
            <Grid item xs={12} >
                <Typography variant="h6">
                    GET IN TOUCH
                </Typography>

            </Grid>
            <Grid>
                <Typography >
                    hjkh ghjdfgh ehuig    vhguhjvj v jv eui ge gj ghfdnv  gjgjeiotgui dfjguihe o  ijgui
                    g uthutghdjv gjitupv dkfgjiosrjutpo gdgoeptu ggfnjrtu  dfjngjg ohtui  rhjngeuh t hg
                    ghweur ghuehrg segrjgu gnwuh gjhe5iu gi4h5t trhe4u  .
           </Typography>

            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography>
                        Contact Form
               </Typography>
                </Grid>
                <Grid item xs={6}>
                    <InputLabel>NAME*</InputLabel>
                    <TextField
                        color="#fcfcfc"
                        fullWidth
                        id=""
                        label="Name"

                    />

                </Grid>
                <Grid item xs={6}>
                    <InputLabel>Email Address*</InputLabel>
                    <TextField
                        fullWidth
                        id=""
                        label="Email"

                    />

                </Grid>
                <Grid item xs={12}>
                    <InputLabel>Message*</InputLabel>
                    <TextField
                        fullWidth
                        id=""
                        label=""
                        multiline=""
                    />

                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="default">
                        send
                </Button>

                </Grid>
            </Grid>
        </Grid>
    )
}

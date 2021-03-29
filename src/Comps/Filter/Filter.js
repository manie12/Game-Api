import { Typography, TextField, FormControl, MenuItem, Select, Button, Grid } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Styles';

export default function Filter() {
    const classes = useStyles();
    return (
        <div className={classes.filter}>
            <Grid container spacing={5} >
                <Grid item lg={12} sm={12} xs={12}>
                    <Typography className={classes.typo} >
                        Filter Results
                     </Typography>

                </Grid>
                <Grid lg={12} className={classes.font} sm={12} xs={12}>
                    <label htmlFor={Text}>Name(contains)</label>
                    <TextField
                        margin="normal"
                        id="Text"
                        label="Text String"
                        size="small"
                        className={classes.Input}
                    />

                </Grid>

                <Grid lg={12} className={classes.font} sm={4} xs={12}>
                    <label htmlFor={Text}>Minimum Score</label>

                    <TextField
                        margin="normal"
                        id="Text"
                        label="1 - 10"
                        size="small"
                        className={classes.Input}
                    />

                </Grid>

                <Grid lg={12} className={classes.order} sm={5} xs={12}>

                    <FormControl margin="dense" fullWidth >
                        <label htmlFor={Text}>Order By</label>
                        <Select

                            className={classes.Input1}
                        >

                            <MenuItem >Release Date</MenuItem>
                            <MenuItem >Score</MenuItem>
                            <MenuItem >Name</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

                <Grid lg={12} sm={2} alignItems='centre' xs={12}>
                    <Button className={classes.button} variant="contained" color="primary">
                        Clear
                   </Button>

                </Grid>

            </Grid>
        </div >
    )
}

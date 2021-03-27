import { Typography, TextField } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Styles';

export default function Filter() {
    const classes = useStyles();
    return (
        <div className={classes.filter}>
            <Typography >
                Filter Results
            </Typography>
            <label htmlFor={Text}>Name(contains)</label>
            <TextField
                id="Text"
                label="Text String"
                className={classes.Input}

            />
        </div>
    )
}

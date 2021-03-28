import { Typography, TextField, FormControl, MenuItem, Select, Button, Container } from '@material-ui/core';
import React from 'react';
import { useStyles } from './Styles';

export default function Filter() {
    const classes = useStyles();
    return (
        <Container className={classes.filter}>
            <Typography className={classes.typo} >
                Filter Results
            </Typography>
            <label htmlFor={Text}>Name(contains)</label>
            <TextField
                margin="normal"
                id="Text"
                label="Text String"
                className={classes.Input}
                size="small"
            />

            <label htmlFor={Text}>Minimum Score</label>

            <TextField
                margin="normal"
                id="Text"
                label="1 - 10"
                className={classes.Input}
                size="small"
            />

            <FormControl fullWidth>
                <label htmlFor={Text}>Order By</label>

                <Select >
                    <MenuItem >Release Date</MenuItem>
                    <MenuItem >Score</MenuItem>
                    <MenuItem >Name</MenuItem>
                </Select>
            </FormControl>

            <Button className={classes.button} variant="contained" color="primary">
                Clear
            </Button>
        </Container>
    )
}

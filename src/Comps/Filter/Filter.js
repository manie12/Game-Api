import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from "react-datepicker";
import { Typography, TextField, FormControl, MenuItem, Select, Button, Grid } from '@material-ui/core';
import { useStyles } from './Styles';
import { getActionData } from '../../Redux/Actions/GetData';
import "react-datepicker/dist/react-datepicker.css";

export default function Filter() {

    const [Show, setShow] = useState(true);
    const [ShowDate, setDate] = useState(false);
    const [ShowName, setName] = useState(false);
    const handleDate = () => {
        setDate(true);
        setName(false);
        setShow(false)
    }
    const handleScore = () => {
        setDate(false);
        setName(false);
        setShow(true)
    }
    const handleName = () => {
        setDate(false);
        setName(true);
        setShow(false)
    }
    const dispatch = useDispatch();
    const [Search, setSearch] = useState("");
    const [Summary, setSummary] = useState(null)
    //console.log(Search)
    const classes = useStyles();
    dispatch(getActionData(Search));

    const handleClear = () => {
        setSearch("")
    }
    return (

        <div className={classes.filter}>
            <Grid container spacing={5} >
                <Grid item md={12} sm={12} xs={12}>
                    <Typography className={classes.typo} >
                        Filter Results
                     </Typography>

                </Grid>
                <Grid md={12} className={classes.font} sm={12} xs={12}>
                    <label htmlFor={Text}>Name(contains)</label>
                    <TextField
                        margin="normal"
                        id="Text"
                        label="Text String"
                        size="small"
                        className={classes.Input}
                        value={Search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </Grid>

                {ShowDate ? (
                    <Grid lg={12} md={4} className={classes.font} sm={4} xs={12}>
                        <label htmlFor={Text}>Release Date</label>

                        <DatePicker
                            className={classes.selectDate}
                            selected={Search}
                            onChange={date => setSearch(date)}
                            dateFormat="dd/MM/yyyy"
                        />


                    </Grid>
                ) : null
                }
                {Show ? (
                    <Grid lg={12} gutterBottom md={4} className={classes.font} sm={4} xs={12}>

                        <FormControl className={classes.formControl}>
                            <InputLabel className={classes.selectForm} margin='dense' id="demo-simple-select-label">Minimum Score</InputLabel>
                            <Select
                                fullWidth
                                className={classes.select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Summary}
                                onChange={(e) => setSummary(e.target.value)}
                            >
                                <MenuItem value={20}>29</MenuItem>
                                <MenuItem value={40}>40</MenuItem>
                                <MenuItem value={60}>60</MenuItem>
                                <MenuItem value={80}>80</MenuItem>
                            </Select>
                        </FormControl>

                    </Grid>
                ) : null
                }
                {ShowName ? (
                    <Grid lg={12} md={4} className={classes.font} sm={4} xs={12}>
                        <label htmlFor={Text}>Name Title</label>

                        <TextField
                            margin="normal"
                            id="Text"
                            label="Text String"
                            size="small"
                            className={classes.Input}
                            value={Search}
                            onChange={(e) => setSearch(e.target.value)}
                        />


                    </Grid>
                ) : null
                }

                <Grid lg={12} md={4} className={classes.order} sm={5} xs={12}>

                    <FormControl margin="dense" fullWidth >
                        <label htmlFor={Text}>Order By</label>
                        <Select

                            className={classes.Input1}
                        >

                            <MenuItem onClick={handleDate} >Release Date</MenuItem>
                            <MenuItem onClick={handleScore}>Score</MenuItem>
                            <MenuItem onClick={handleName} >Name</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

                <Grid lg={12} md={4} sm={2} alignItems='centre' xs={12}>
                    <Button onClick={handleClear} className={classes.button} variant="contained" color="primary">
                        Clear
                   </Button>

                </Grid>

            </Grid>
        </div >
    )
}

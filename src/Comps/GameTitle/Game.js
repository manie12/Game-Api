import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Typography, Grid } from '@material-ui/core';
import { useStyles } from './Styles';

export default function Game({ Search, SetSearch }) {

    const [Game, setGame] = useState([]);

    useEffect(async () => {
        const res = await fetch("https://public.connectnow.org.uk/applicant-test/");
        const data = await res.json();
        //console.log(data)
        setGame(data)
    }, [])

    const classes = useStyles();
    return (
        <div className={classes.gamePage}>

            { Game.map((value) => (
                <>
                    {value.filter((val) => {

                        if (Search === "") {
                            return val
                        } else if (val.toLowerCase().includes(Search.toLowerCase()))
                            return val
                    })}
                    <Grid key={val.id} container spacing={2} >
                        <Grid item sm={2} lg={2} xs={12}>
                            <div className={classes.image} >FFFFF</div>

                        </Grid>

                        <Grid container item sm={9} lg={9} xs={12} >
                            <Grid item sm={12} lg={12}>
                                <Typography variant='h6' >{val.name}</Typography>

                            </Grid>

                            <Grid item sm={12} lg={12} xs={12}>
                                <Typography className={classes.typo1}>{moment(val.first_release_date).fromNow()}</Typography>

                            </Grid>
                            <Grid item sm={12} lg={12} xs={12}>
                                <Typography className={classes.typo}>
                                    {val.summary}
                                </Typography>
                            </Grid>



                        </Grid>

                        <Grid item sm={1} lg={1} xs={12} className={classes.circle} alignItems='center'>{val.rating}</Grid>
                    </Grid>

                </>


            ))}

        </div >
    )
}

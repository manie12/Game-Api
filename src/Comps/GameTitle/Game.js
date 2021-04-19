import React, { useEffect } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Typography, Grid, Avatar } from '@material-ui/core';
import { useStyles } from './Styles';

export default function Game() {
    const GameData = useSelector((state) => state.Game);
    //console.log(GameData);
    const classes = useStyles();

    useEffect(() => {

        async function fetchData() {

            const res = await fetch("https://public.connectnow.org.uk/applicant-test/");

            const data = await res.json();

            // console.log(data);

            localStorage.setItem("data", JSON.stringify(data));

        }

        fetchData();

    }, []);


    const getData = JSON.parse(localStorage.getItem("data"))

    const filteredGames = getData.filter((game) => {

        const gameFilter = game.name.toLowerCase().indexOf(GameData.toLowerCase()) >= 0;

        return gameFilter;

    });


    return (
        <div className={classes.gamePage}>

            { filteredGames && filteredGames.map((val) => (

                < Grid key={val.id} container spacing={2} >

                    <Grid item sm={2} lg={2} xs={12}>
                        <div className={classes.image}  ></div>

                    </Grid>

                    <Grid container item sm={9} lg={9} xs={12} >
                        <Grid item sm={12} lg={12}>
                            <Typography variant='h6' >{val.name}</Typography>

                        </Grid>


                        <Grid item sm={12} lg={12} xs={12}>
                            <Typography className={classes.typo1}>Release Date:{moment(val.first_release_date).format('l')}
                            </Typography>
                        </Grid>
                        <Grid item sm={12} lg={12} xs={12}>
                            <Typography className={classes.typo}>
                                {val.summary}
                            </Typography>
                        </Grid>



                    </Grid>

                    <Grid item sm={1} lg={1} xs={12} alignItems='center'> <Avatar className={classes.circle}>{val.rating}</Avatar>  </Grid>


                </Grid>




            )

            )}

        </div >
    )
}

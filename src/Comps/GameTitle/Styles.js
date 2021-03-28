import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    gamePage: {
        backgroundColor: "#0e1a2b",
        height: '100vh',
        marginTop: '11em',
        width: '120%',
        color: '#fcfcfc',
        [theme.breakpoints.down("md")]: {
            marginTop: '30em'
        }

    },
    typo: {
        fontSize: '.7em'
    },
    typo1: {
        fontSize: '1em',
        fontWeight: 'lighter'
    },
    image: {
        backgroundColor: '#fcfcfc',
        height: '100%'
    },
    mar: {
        margin: '1em'
    },
    circle: {
        borderRadius: '50%',
        margin: 'auto ',

    }

}));
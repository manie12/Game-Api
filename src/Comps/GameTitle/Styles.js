import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    gamePage: {
        backgroundColor: "#0e1a2b",
        height: '100vh',
        marginTop: '11em',
        color: '#fcfcfc',
        [theme.breakpoints.down("md")]: {
            marginTop: '0em',
            width: '107%'
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "1em",
            width: '107%',
            position: 'relative'
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
        backgroundColor: 'black',
        height: '100%',
        [theme.breakpoints.down("xs")]: {
            height: '16vh'
        }

    },
    mar: {
        margin: '1em'
    },
    circle: {

        backgroundColor: '#5692e8',
        [theme.breakpoints.down("xs")]: {
            position: 'absolute',
            left: '17em'
        }

    }

}));
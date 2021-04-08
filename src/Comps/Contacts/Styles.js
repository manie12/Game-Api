import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    header: {
        width: '89%',
        padding: '2em 0em ',
        backgroundColor: '#03080f',
        [theme.breakpoints.down("md")]: {
            width: '100%',

        }

    },
    toolbar: {
        position: 'relative',

    },
    typography: {
        position: 'absolute',
        top: '1.2em',
        fontSize: '1.8em',
        marginLeft: '1em',
        textDecoration: "none",
        color: '#fcfcfc',
        [theme.breakpoints.down("md")]: {
            position: 'absolute',
            top: '3em',
            fontSize: '1.5em'
        }

    },
    typography1: {
        top: '1.2em',
        position: 'absolute',
        fontSize: '1.8em',
        left: "16em",
        textDecoration: "none",
        color: '#fcfcfc',
        [theme.breakpoints.down("md")]: {
            position: 'absolute',
            top: '1.2em',
            left: '1.95em',
            fontSize: '1.5em'
        }

    },
    typography2: {
        marginLeft: '8.9em',
        fontSize: '3em',
        color: '#182c47',
        letterSpacing: '0.1em',
        [theme.breakpoints.down("md")]: {
            position: 'absolute',
            fontSize: '2.6em',
            marginLeft: "0.4em"

        }

    },
    headerBottom: {
        width: '40%',
        marginTop: '20em',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'black',
        backgroundColor: '#03080f',
        [theme.breakpoints.down("md")]: {
            marginTop: '10em',
            width: '50%'

        },
        [theme.breakpoints.down("sm")]: {
            marginTop: '10em',
            width: '60%'

        },
        [theme.breakpoints.down("sm")]: {
            marginTop: '10em',
            width: '100%'

        },


    },
    form: {
        marginTop: "2em"
    },
    touch: {
        textAlign: 'start',
        marginBottom: '1em',
        color: '#fcfcfc'
    },
    bottom: {
        marginBottom: '1em',
        backgroundColor: '#5692e8'
    },
    bgColor: {

        width: '100%'

    },
    input: {
        backgroundColor: '#182c47',
        marginTop: '1em'
    }

}));
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    header: {
        width: '89%',
        backgroundColor: '#03080f',

        padding: '2em 0em ',
        [theme.breakpoints.down("md")]: {
            width: '100%'
        }

    },
    toolbar: {
        position: 'relative'
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
            top: '3em',
            left: '1.9em',
            fontSize: '1.5em'
        }

    },
    typography2: {
        fontSize: '3em',
        color: '#182c47',
        letterSpacing: '0.15em',
        [theme.breakpoints.down("md")]: {
            position: 'absolute',
            fontSize: '2.6em'

        }

    }

}));
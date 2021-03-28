import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    filter: {
        height: '60vh',
        backgroundColor: '#0e1a2b',
        marginTop: '11em',
        color: '#fcfcfc',
        marginLeft: '9.5em',
        padding: '1em 2em',
        [theme.breakpoints.down("md")]: {
            height: '5vh',
            width: '100%',
            marginLeft: '0em',
        }

    },
    Input: {
        backgroundColor: '#182c47',
        width: '100%',
        color: '#fcfcfc',
        textAlign: "center",
        marginBottom: '3em'
    },
    typo: {
        marginBottom: '2em'

    },
    button: {
        marginTop: '6em',
        marginLeft: '7em',
        backgroundColor: '#5692e8'
    }

}));
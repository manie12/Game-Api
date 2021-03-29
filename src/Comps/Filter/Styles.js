import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    filter: {
        height: '60vh',
        backgroundColor: '#0e1a2b',
        marginTop: '11em',
        color: '#fcfcfc',
        marginLeft: '9.5em',
        padding: '1em 2em',

        [theme.breakpoints.down("sm")]: {
            width: '98%',
            marginLeft: '0em',
            height: '30vh',

        },
        [theme.breakpoints.down("xs")]: {
            height: '60vh'
        }


    },
    Input: {
        backgroundColor: '#182c47',
        width: '100%',
        color: '#fcfcfc',
        textAlign: "center",
        marginBottom: '3em',
        [theme.breakpoints.down("sm")]: {

            marginBottom: '.2em'
        }


    },

    Input1: {
        backgroundColor: '#182c47',
        width: '100%',
        color: '#fcfcfc',
        textAlign: "center",
        marginBottom: '3em',
        [theme.breakpoints.down("sm")]: {

            marginBottom: '.2em'
        }


    },
    typo: {
        marginBottom: '2em',
        [theme.breakpoints.down("sm")]: {
            fontSize: '2em',
            marginBottom: '.5em'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '1em',
            marginBottom: '.5em',

        },



    },
    button: {
        marginTop: '6em',
        marginLeft: '7em',
        backgroundColor: '#5692e8',
        [theme.breakpoints.down("sm")]: {
            textAlign: 'end',
            marginTop: '3.2em',
            marginLeft: '4.5em'
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: '1em',
            width: '100%',
            marginLeft: '0em'

        }
    },
    order: {
        marginLeft: '2em',
        width: '1005',
        [theme.breakpoints.down("xs")]: {
            marginLeft: "0em"
        }
    },
    font: {
        fontSize: '.8em'
    }



}));
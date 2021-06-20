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
            width: '107%',
            marginLeft: '0em',
            height: '30vh',

        },
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
        marginTop: '0em',
        marginLeft: '4.3em',
        backgroundColor: '#5692e8',
        fontFamily: 'Montserrat',
        [theme.breakpoints.down("md")]: {
            textAlign: 'end',
            marginTop: '3.2em',
            marginLeft: '4.5em',

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
        }
    },
    order: {
        marginLeft: '0em',
        width: '100%'
    },
    selectForm: {
        marginTop: '-3em',
        width: '100%',
        color: '#fcfcfc'
    },
    select: {
        width: '100%'
    },
    selectDate: {
        backgroundColor: '#182c47',
        width: '110%',
        padding: '1em'

    },
    formControl: {
        width: '100%',
        backgroundColor: '#182c47',
        marginTop: '1.5em'

    }


}));

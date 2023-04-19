import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import AppliMeteo from "../Images/AppliMeteo.jpg";
import DivineStay from "../Images/DivineStay.jpg";
import PersoList from "../Images/PersoList.jpg";

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const useStyles = makeStyles({
    root: {
        margin:"auto",
    },
    img: {
        height: "4vw",
        width: "4vw",
    },
    text: {
        fontFamily: "saddlebag-webfont",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "6vw",
        color: "#402218",
        transition: "text-decoration-color 1s",
        textDecoration: "underline 0.1em rgba(255, 255, 255, 0)",
        "&:hover": {
            textDecorationColor: "#402218",
        }
    },
    text2: {
        fontFamily: "saddlebag-webfont",
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2vw",
        color: "#402218",
        listStyleType: "none"
    },
    slider: {
        width: "60%",
        margin: "auto",
        marginTop: 40
    }
});

function Travaux() {

    const classes = useStyles();

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    const onClick = () => {
        window.open("https://meteo-react.vercel.app/admin/dashboard");
    }

    return (
        <div className={classes.root}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                <Typography className={classes.text}>Charges:</Typography>
        </Grid>
        <ul className={classes.text2}>
            <li>Attempted genocide</li>
            <li>Terrorism</li>
            <li>Serial murders</li>
            <li>Forced canibalism</li>
            <li>Rape</li>
            <li>Child pornography</li>
            <li>Forced suicide</li>
            <li>Drug possession</li>
            <li>Armed robbery</li>
            <li>Kidnapping</li>
            <li>Forced mutilation</li>
            <li>Embezzlement</li>
            <li>Racist actions</li>
            <li>Prostitution</li>
            <li>Blackmail</li>
            <li>Vandalism</li>
            <li>Child abuse</li>
            <li>Animal abuse</li>
            <li>Smuggling</li>
        </ul>
        </div>
    )
}

export default Travaux;

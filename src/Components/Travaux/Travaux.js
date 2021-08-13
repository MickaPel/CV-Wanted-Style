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
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3vw",
        color: "#402218"
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

    const slider = (
        <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
            className={classes.slider}
            bullets={false}
        >
            <div data-src={AppliMeteo} onClick={onClick}/>
            <div data-src={DivineStay} onClick={() => window.open("https://divinestay-b4eee.firebaseapp.com/")}/>
            <div data-src={PersoList} onClick={() => window.open("https://newpersolist.firebaseapp.com/")}/>
        </AutoplaySlider>
    );

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
            {slider}
        </div>
    )
}

export default Travaux;

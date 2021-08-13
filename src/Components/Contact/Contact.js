import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import GithubLogo from "../Images/github1.png";
import Linkedin from "../Images/linkedin2.png";
import Mail from "../Images/mail.png";

const useStyles = makeStyles({
    root: {
        margin:"auto",
        marginTop: 20
    },
    img: {
        height: "5vw",
        width: "5vw",
        marginTop: 25,
        marginBottom: 25,
        transition: "transform .2s",
        "&:hover": {
            transform: "scale(1.7)"
        }
    },
    text: {
        fontFamily: "saddlebag-webfont",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2.5vw",
        color: "#402218",
        marginTop: 60,
        textShadow: "0px 0px 5px #fff, 0px 0px 7px #BD1616",
    },
    text2: {
        fontFamily: "saddlebag-webfont",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2.5vw",
        color: "#402218",
        textShadow: "0px 0px 5px #fff, 0px 0px 7px #BD1616",
    },
    grid: {
        paddingBottom: 50
    }
});

function Contact() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.text}>If you have any informations, </Typography>
            <Typography className={classes.text2}>please contact us:</Typography>
            <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            className={classes.grid}
            >
                <img 
                    src={GithubLogo} 
                    alt="github" 
                    onClick={() => window.open("https://github.com/Mitch-Aries")}
                    className={classes.img}/>
                <img 
                    src={Linkedin} 
                    alt="linkedin" 
                    onClick={() => window.open("https://www.linkedin.com/in/mykhaylo-pelykh-55587017b/")}
                    className={classes.img}/>
                <img 
                    src={Mail} 
                    alt="mail"
                    onClick={() => window.open('mailto:mykhaylopelykh@gmail.com')}
                    className={classes.img}/>
            </Grid>
        </div>
    )
}

export default Contact;

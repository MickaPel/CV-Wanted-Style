import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Star from "../Images/star2.png";
import './../../App.css';

const useStyles = makeStyles({
    root: {
        margin:"auto",
    },
    img: {
        height: "4vw",
        width: "4vw",
        marginRight: 5,
    },
    text: {
        fontFamily: "saddlebag-webfont",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4vw",
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
    text3: {
        width: "22ch",
        animation: "typing 2s steps(22), blink .5s step-end infinite alternate",
        whiteSpace: "nowrap",
        overflow: "hidden",
        borderRight: "3px solid",
        fontFamily: "monospace",
        fontSize: "2em",
    },
    grid: {
        width: "35%",
        margin:"auto"
    }
});

function Competences() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            >
                <Typography className={classes.text}>Personality aspects:</Typography>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
            >
                <div className="Competences">
                    <p>-Inteligent:&nbsp;</p>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                </div>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
            >
                <div className="Competences">
                    <p>-Manipulator:&nbsp;</p>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                </div>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
            >
                <div className="Competences">
                    <p>-Leadership:&nbsp;</p>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                </div>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
            >
                <div className="Competences">
                    <p>-Racism:&nbsp;</p>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                </div>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
            >
                <div className="Competences">
                    <p>-Charismatic:&nbsp;</p>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                </div>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
            >
                <div className="Competences">
                    <p>-Vulgarity:&nbsp;</p>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                </div>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
            >
                <div className="Competences">
                    <p>-Xenophobic:&nbsp;</p>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                </div>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
            >
                <div className="Competences">
                    <p>-Machiavelic:&nbsp;</p>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                </div>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
            >
                <div className="Competences">
                    <p>-Anti-Semite:&nbsp;</p>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                </div>
        </Grid>
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            className={classes.grid}
            >
                <div className="Competences">
                    <p>-Homophobic:&nbsp;</p>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                    <img src={Star} alt="star" className="img"/>
                </div>
        </Grid>
        </div>
    )
}

export default Competences;

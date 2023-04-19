import React from 'react';
import Revolver from "../Images/Revolver5.png";
import Revolver2 from "../Images/Revolver4.png";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        margin:"auto",
    },
    img: {
        height: "10,56vw",
        width: "8vw",
    },
    text: {
        fontFamily: "saddlebag-webfont",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        fontSize: "6vw",
        color: "#402218",
        transition: "transform 250ms",
        "&:hover": {
            color: "#810000",
            transform: "translateY(-10px)",
        },
    },
    text2: {
        fontFamily: "saddlebag-webfont",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4vw",
        color: "#402218"
    },
    text3: {
        fontFamily: "riogrande-webfont",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "4vw",
        color: "#402218",
        transition: "transform 2s",
        "&:hover": {
            transform: "scale(1.1)",
        }
    },
    text4: {
        fontFamily: "saddlebag-webfont",
        display: "flex",
        justifyContent: "center",
        marginBottom: 30,
        alignItems: "center",
        fontSize: "6vw",
        color: "#402218",
        transition: "transform 250ms",
        "&:hover": {
            color: "#810000",
            transform: "translateY(-10px)",
        },
    },
});


function FirstInformations() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                    <img src={Revolver} alt="revolver" className={classes.img} />
                    <Typography className={classes.text}>Dead or Alive</Typography>
                    <img src={Revolver2} alt="revolver" 
                    className={classes.img} />
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                    <Typography className={classes.text4}>1.000.000 $</Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                >
                    <Typography className={classes.text2}>Name:&nbsp;</Typography>
                    <Typography className={classes.text3}>Eric Cartman</Typography>
            </Grid>
        </div>
    )
}

export default FirstInformations;

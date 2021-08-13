import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import "../../App.css";

const useStyles = makeStyles({
    root: {
        fontFamily: "cowboy_movie-webfont",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "20vw",
        color: "#402218",
        transition: "text-decoration-color 1s",
        textDecoration: "underline 0.05em rgba(255, 255, 255, 0)",
        "&:hover": {
            textDecorationColor: "#402218",
        }
    },
});

function Header() {

    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.root}>WANTED</Typography>
        </div>
    )
}

export default Header;

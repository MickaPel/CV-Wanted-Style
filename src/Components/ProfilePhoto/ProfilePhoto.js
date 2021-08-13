import React from 'react';
import PhotoProfil from "../Images/PhotoProfil4.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"auto",
        height: "27vw",
        width: "20vw",
        transition: "transform .2s",
        "&:hover": {
            transform: "scale(1.1)"
        }
    },
    grid: {
        width: "70%", 
        margin: "auto"
    },
});


function ProfilePhoto() {

    const classes = useStyles();

    return (
        <div>
            <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            className={classes.grid}
            >
                <img src={PhotoProfil} alt="profil" className={classes.root}/>
            </Grid>
        </div>
    )
}

export default ProfilePhoto;

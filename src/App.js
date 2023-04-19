import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

import Background2 from "./Components/Images/Background.jpg";

import Header from './Components/Header/Header';
import ProfilePhoto from "./Components/ProfilePhoto/ProfilePhoto";
import FirstInformations from './Components/FirstInformations/FirstInformations';
import Competences from './Components/Competences/Competences';
import Travaux from './Components/Charges/Charges';
import Contact from './Components/Contact/Contact';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
});

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Header />
      <ProfilePhoto />
      <FirstInformations />
      <Competences />
      <Travaux />
      <Contact />

    </div>
  );
}

export default App;

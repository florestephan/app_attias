import React, {useState, Fragment, useContext, useEffect} from 'react';
import {FirebaseContext} from '../Firebase';

import Logout from '../Logout';
import FormResults from '../FormResults';
import {
  TextField,
  Typography,
  Toolbar,
  AppBar,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Container,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material/';

const Welcome = props => {

  const firebase = useContext(FirebaseContext);

  const [userSession, setUserSession] = useState(null);

  useEffect(() => {

    let listener = firebase.auth.onAuthStateChanged(user => {
      user ? setUserSession(user) : props.history.push('/docteur');
    })

    return () => {
      listener();
    };
  }, [])

  return userSession === null ? (
    <Fragment>
      <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
        Chargement..
      </Typography>
    </Fragment>
  ) : (
    <Container>
      <header>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Vous êtes connecté
            </Typography>
            <Typography component="div" sx={{flexGrow: 1}}>
              Bienvenue
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <Logout/>
      <FormResults/>

    </Container>
  )

};

export default Welcome;

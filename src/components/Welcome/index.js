import React from 'react';
import './styles.scss';
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

const Welcome = () => {
  return (
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
    </Container>
  )
};

export default Welcome;

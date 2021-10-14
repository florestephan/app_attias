import * as React from "react";
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

class FormConfirmation extends React.Component {

  render() {

    const {values, handleChange} = this.props;

    return (
      <Container>
        <header>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Questionnaire salle d'attente
              </Typography>
              <Typography component="div" sx={{flexGrow: 1}}>
                Confirmaton
              </Typography>
            </Toolbar>
          </AppBar>
        </header>

        <br/>

        <Typography variant="body1">Merci pour vos réponses !</Typography>

      </Container>
    );
  }
}

export default FormConfirmation

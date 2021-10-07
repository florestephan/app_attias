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
  Box
} from '@mui/material/';

class Form1 extends React.Component {

  continue = e => {
    e.preventDefault();
    this.props.nextstep();
  };

  back = e => {
    e.preventDefault();
    this.props.backstep();
  };


  render() {
    return (
      <Container>
        <header>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Questionnaire salle d'attente
              </Typography>
              <Typography component="div" sx={{flexGrow: 1}}>
                Échelle de fatigue de Pichot
              </Typography>
            </Toolbar>
          </AppBar>
        </header>

        <Box textAlign='center'>
          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.back}
          >Retour
          </Button>
        </Box>
      </Container>
    );
  }
}

export default Form1

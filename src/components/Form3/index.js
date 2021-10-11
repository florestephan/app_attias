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

class Form3 extends React.Component {

  continue = e => {
    e.preventDefault();
    this.props.nextstep();
  };

  back = e => {
    e.preventDefault();
    this.props.backstep();
  };


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
                Échelle de somnolence d'epworth
              </Typography>
            </Toolbar>
          </AppBar>
        </header>

        <br/>


        <Box textAlign='center'>
          <Button sx={{mr: "3rem"}}
                  color="primary"
                  variant="contained"
                  onClick={this.back}
          >Retour
          </Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue
          </Button>
        </Box>

      </Container>
    );
  }
}

export default Form3

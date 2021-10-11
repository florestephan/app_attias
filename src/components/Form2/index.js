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

class Form2 extends React.Component {

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
                Échelle HAD : Hospital Anxiety and Depression scale
              </Typography>
            </Toolbar>
          </AppBar>
        </header>

        <br/>

        <Typography variant="body2">L’échelle HAD est un instrument qui permet de dépister les troubles
          anxieux et dépressifs. Sept questions se rapportent à l’anxiété et sept autres à la dimension dépressive.
        </Typography>

        <br/>
        <Divider/>
        <br/>

        <FormLabel component="legend">Je me sens tendu(e) ou énervé(e) </FormLabel>
        <br/>
        <RadioGroup row aria-label="tendu_ou_enerve" name="row-radio-buttons-group"
                    onChange={handleChange('tendu_ou_enerve')} defaultValue={values.tendu_ou_enerve}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="Jamais"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="De temps en temps"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="Souvent"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="La plupart du temps"/>
        </RadioGroup>
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

export default Form2

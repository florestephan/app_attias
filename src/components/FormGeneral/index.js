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
  FormLabel
} from '@mui/material/';


class FormGeneral extends React.Component {

  continue = e => {
    e.preventDefault();
    this.props.nextstep()
  };

  render() {

    const {values, handleChange} = this.props;

    return (

      <form>
        <header>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Questionnaire salle d'attente
              </Typography>
              <Typography component="div" sx={{flexGrow: 1}}>
                Informations générales
              </Typography>
            </Toolbar>
          </AppBar>
        </header>


        <TextField
          placeholder="Nom de famille"
          type="text"
          name="nom_de_famille"
          onChange={handleChange('nom_de_famille')}
          margin="normal"
          fullWidth
        />
        <br/>
        <TextField
          placeholder="Prénom"
          type="text"
          name="prenom"
          onChange={handleChange('prenom')}
          margin="normal"
          fullWidth
        />
        <br/>
        <TextField
          placeholder="Date de naissance"
          type="date"
          name="date_de_naissance"
          onChange={handleChange('date_de_naissance')}
          margin="normal"
          fullWidth
        />
        <br/>
        <FormLabel component="legend">Sexe</FormLabel>
        <RadioGroup row aria-label="sexe" name="row-radio-buttons-group" onChange={handleChange('sexe')}>
          <FormControlLabel value="femme" control={<Radio/>} label="Femme"/>
          <FormControlLabel value="homme" control={<Radio/>} label="Homme"/>
        </RadioGroup>


        <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
        >Continue
        </Button>
      </form>

    );
  }
}


export default FormGeneral

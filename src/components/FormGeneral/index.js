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
  Container
} from '@mui/material/';


class FormGeneral extends React.Component {

  continue = e => {
    e.preventDefault();
    this.props.nextstep()
    console.log(Object.keys(this.props.values))
    console.log(Object.values(this.props.values))
  };

  render() {

    const {values, handleChange} = this.props;

    return (

      <Container>
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
          <br/>

          <FormLabel component="legend">Vous êtes fumeur/fumeuse ?</FormLabel>
          <RadioGroup row aria-label="tabac" name="row-radio-buttons-group" onChange={handleChange('tabac')}>
            <FormControlLabel value="oui" control={<Radio/>} label="Oui"/>
            <FormControlLabel value="non" control={<Radio/>} label="Non"/>
          </RadioGroup>
          <br/>

          <FormLabel component="legend">Dormez-vous seul(e) ?</FormLabel>
          <RadioGroup row aria-label="dormir_seul" name="row-radio-buttons-group"
                      onChange={handleChange('dormir_seul')}>
            <FormControlLabel value="oui" control={<Radio/>} label="Oui"/>
            <FormControlLabel value="non" control={<Radio/>} label="Non"/>
          </RadioGroup>
          <br/>

          <TextField
            placeholder="Profession "
            type="text"
            name="job"
            onChange={handleChange('job')}
            margin="normal"
            fullWidth
          />
          <br/>

          <FormLabel component="legend">Ronflement ?</FormLabel>
          <RadioGroup row aria-label="ronflement" name="row-radio-buttons-group" onChange={handleChange('ronflement')}>
            <FormControlLabel value="oui" control={<Radio/>} label="Oui"/>
            <FormControlLabel value="non" control={<Radio/>} label="Non"/>
          </RadioGroup>

          <br/>

          <FormLabel component="legend">Maux de tête le matin ?</FormLabel>
          <RadioGroup row aria-label="maux_de_tete" name="row-radio-buttons-group"
                      onChange={handleChange('maux_de_tete')}>
            <FormControlLabel value="oui" control={<Radio/>} label="Oui"/>
            <FormControlLabel value="non" control={<Radio/>} label="Non"/>
          </RadioGroup>

          <br/>

          <FormLabel component="legend">Avez-vous ressenti ou vous a–t-on rapporté que vous faites des pauses
            respiratoires la nuit ? </FormLabel>
          <RadioGroup row aria-label="pause_respiratoire" name="row-radio-buttons-group"
                      onChange={handleChange('pause_respiratoire')}>
            <FormControlLabel value="oui" control={<Radio/>} label="Oui"/>
            <FormControlLabel value="non" control={<Radio/>} label="Non"/>
          </RadioGroup>
          <br/>

          <TextField
            placeholder="Combien de fois allez vous uriner la nuit ?"
            type="number"
            name="uriner_nuit"
            onChange={handleChange('uriner_nuit')}
            margin="normal"
            fullWidth
          />
          <br/>

          <FormLabel component="legend">Avez-vous des problèmes de concentration/ de mémoire la journée ?</FormLabel>
          <RadioGroup row aria-label="probleme_memoire" name="row-radio-buttons-group"
                      onChange={handleChange('probleme_memoire')}>
            <FormControlLabel value="oui" control={<Radio/>} label="Oui"/>
            <FormControlLabel value="non" control={<Radio/>} label="Non"/>
          </RadioGroup>

          <br/>

          <FormLabel component="legend">Etes vous irritable la journée ? </FormLabel>
          <RadioGroup row aria-label="irritable" name="row-radio-buttons-group"
                      onChange={handleChange('irritable')}>
            <FormControlLabel value="oui" control={<Radio/>} label="Oui"/>
            <FormControlLabel value="non" control={<Radio/>} label="Non"/>
          </RadioGroup>

          <br/>

          <FormLabel component="legend">Considérez vous que votre sommeil est réparateur ?</FormLabel>
          <RadioGroup row aria-label="sommeil_reparateur" name="row-radio-buttons-group"
                      onChange={handleChange('sommeil_reparateur')}>
            <FormControlLabel value="oui" control={<Radio/>} label="Oui"/>
            <FormControlLabel value="non" control={<Radio/>} label="Non"/>
          </RadioGroup>

          <br/>

          <FormLabel component="legend">Avez-vous de la somnolence au volant ?</FormLabel>
          <RadioGroup row aria-label="somnolance_volant" name="row-radio-buttons-group"
                      onChange={handleChange('somnolance_volant')}>
            <FormControlLabel value="oui" control={<Radio/>} label="Oui"/>
            <FormControlLabel value="non" control={<Radio/>} label="Non"/>
          </RadioGroup>

          <br/>

          <FormLabel component="legend">Avez-vous eu un accident lié à un endormissement au volant
            ?</FormLabel>
          <RadioGroup row aria-label="accident_endormissement_volant" name="row-radio-buttons-group"
                      onChange={handleChange('accident_endormissement_volant')}>
            <FormControlLabel value="oui" control={<Radio/>} label="Oui"/>
            <FormControlLabel value="non" control={<Radio/>} label="Non"/>
          </RadioGroup>


          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Continue
          </Button>
        </form>
      </Container>

    );
  }
}


export default FormGeneral

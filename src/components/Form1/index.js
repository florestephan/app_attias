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
                Échelle de fatigue de Pichot
              </Typography>
            </Toolbar>
          </AppBar>
        </header>

        <br/>

        <Typography variant="body2" color="red">Parmi les huit propositions suivantes, déterminez celles qui
          correspondent le mieux
          à votre état en affectant
          une note entre 0 et 4 :
        </Typography>

        <List>
          <ListItem disablePadding>
            <ListItemText secondary="0 = Pas du tout"/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText secondary="1= Un peu"/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText secondary="2 = Moyennement"/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText secondary="3= Beaucoup"/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText secondary="4 = Extrêmement"/>
          </ListItem>
        </List>

        <br/>
        <Divider/>
        <br/>

        <FormLabel component="legend">Je manque d'énergie</FormLabel>
        <br/>
        <RadioGroup row aria-label="manque_energie" name="row-radio-buttons-group"
                    onChange={handleChange('manque_energie')} defaultValue={values.manque_energie}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
          <FormControlLabel labelPlacement="top" value="4" control={<Radio/>} label="4"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Tout demande un effort</FormLabel>
        <br/>
        <RadioGroup row aria-label="demande_un_effort" name="row-radio-buttons-group"
                    onChange={handleChange('demande_un_effort')} defaultValue={values.demande_un_effort}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
          <FormControlLabel labelPlacement="top" value="4" control={<Radio/>} label="4"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Je me sens faible à certains endroits du corps</FormLabel>
        <br/>
        <RadioGroup row aria-label="faible_certains_endroits_du_corps" name="row-radio-buttons-group"
                    onChange={handleChange('faible_certains_endroits_du_corps')}
                    defaultValue={values.faible_certains_endroits_du_corps}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
          <FormControlLabel labelPlacement="top" value="4" control={<Radio/>} label="4"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">J'ai les bras ou les jambes lourdes</FormLabel>
        <br/>
        <RadioGroup row aria-label="bras_jambes_lourdes" name="row-radio-buttons-group"
                    onChange={handleChange('bras_jambes_lourdes')}
                    defaultValue={values.bras_jambes_lourdes}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
          <FormControlLabel labelPlacement="top" value="4" control={<Radio/>} label="4"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Je me sens fatigué sans raison</FormLabel>
        <br/>
        <RadioGroup row aria-label="fatigue_sans_raison" name="row-radio-buttons-group"
                    onChange={handleChange('fatigue_sans_raison')}
                    defaultValue={values.fatigue_sans_raison}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
          <FormControlLabel labelPlacement="top" value="4" control={<Radio/>} label="4"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">J'ai envie de m'allonger pour me reposer</FormLabel>
        <br/>
        <RadioGroup row aria-label="envie_de_se_reposer" name="row-radio-buttons-group"
                    onChange={handleChange('envie_de_se_reposer')}
                    defaultValue={values.envie_de_se_reposer}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
          <FormControlLabel labelPlacement="top" value="4" control={<Radio/>} label="4"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">J'ai du mal à me concentrer</FormLabel>
        <br/>
        <RadioGroup row aria-label="mal_a_me_concentrer" name="row-radio-buttons-group"
                    onChange={handleChange('mal_a_me_concentrer')}
                    defaultValue={values.mal_a_me_concentrer}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
          <FormControlLabel labelPlacement="top" value="4" control={<Radio/>} label="4"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Je me sens fatigué, lourd et raide</FormLabel>
        <br/>
        <RadioGroup row aria-label="fatigue_lourd_raide" name="row-radio-buttons-group"
                    onChange={handleChange('fatigue_lourd_raide')}
                    defaultValue={values.fatigue_lourd_raide}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
          <FormControlLabel labelPlacement="top" value="4" control={<Radio/>} label="4"/>
        </RadioGroup>
        <br/>

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

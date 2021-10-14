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
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  back = e => {
    e.preventDefault();
    this.props.backstep();
    window.scrollTo({top: 0, behavior: 'smooth'})
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

        <Typography variant="body2">Afin de pouvoir mesurer chez vous une éventuelle somnolence dans la journée, voici
          quelques
          situations relativement usuelles, où nous vous demandons d'évaluer le risque de vous assoupir.
          Aussi, si vous n'avez pas été récemment dans l'une de ces situations, essayez d'imaginer comment
          cette situation pourrait vous affecter.
        </Typography>

        <br/>

        <Typography variant="body2" color="red">Pour répondre, utilisez l'échelle suivante en entourant le chiffre le
          plus approprié pour chaque
          situation :
        </Typography>

        <List>
          <ListItem disablePadding>
            <ListItemText secondary="0 = aucune chance de somnoler ou de s’endormir"/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText secondary="1 = faible chance de s'endormir"/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText secondary="2 = chance moyenne de s'endormir"/>
          </ListItem>
          <ListItem disablePadding>
            <ListItemText secondary="3 = forte chance de s'endormir"/>
          </ListItem>
        </List>

        <br/>
        <Divider/>
        <br/>

        <FormLabel component="legend">Assis en train de lire</FormLabel>
        <br/>
        <RadioGroup row aria-label="assis_en_train_de_lire" name="row-radio-buttons-group"
                    onChange={handleChange('assis_en_train_de_lire')} defaultValue={values.assis_en_train_de_lire}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">En train de regarder la télévision</FormLabel>
        <br/>
        <RadioGroup row aria-label="en_regardant_la_television" name="row-radio-buttons-group"
                    onChange={handleChange('en_regardant_la_television')}
                    defaultValue={values.en_regardant_la_television}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Assis, inactif dans un lieu public (cinéma, théâtre, réunion)</FormLabel>
        <br/>
        <RadioGroup row aria-label="inactif_dans_un_lieu_public" name="row-radio-buttons-group"
                    onChange={handleChange('inactif_dans_un_lieu_public')}
                    defaultValue={values.inactif_dans_un_lieu_public}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Comme passager d'une voiture (ou transport en commun) roulant sans arrêt
          pendant une heure</FormLabel>
        <br/>
        <RadioGroup row aria-label="passager_dans_une_voiture" name="row-radio-buttons-group"
                    onChange={handleChange('passager_dans_une_voiture')}
                    defaultValue={values.passager_dans_une_voiture}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Allongé l'après-midi lorsque les circonstances le permettent</FormLabel>
        <br/>
        <RadioGroup row aria-label="allonge_en_apres_midi" name="row-radio-buttons-group"
                    onChange={handleChange('allonge_en_apres_midi')}
                    defaultValue={values.allonge_en_apres_midi}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Étant assis en parlant avec quelqu'un</FormLabel>
        <br/>
        <RadioGroup row aria-label="assis_en_parlant_avec_une_personne" name="row-radio-buttons-group"
                    onChange={handleChange('assis_en_parlant_avec_une_personne')}
                    defaultValue={values.assis_en_parlant_avec_une_personne}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Assis au calme après un déjeuner sans alcool</FormLabel>
        <br/>
        <RadioGroup row aria-label="assis_apres_un_dejeuner_sans_alcool" name="row-radio-buttons-group"
                    onChange={handleChange('assis_apres_un_dejeuner_sans_alcool')}
                    defaultValue={values.assis_apres_un_dejeuner_sans_alcool}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Dans une voiture immobilisée depuis quelques minutes</FormLabel>
        <br/>
        <RadioGroup row aria-label="immobilise_dans_une_voiture" name="row-radio-buttons-group"
                    onChange={handleChange('immobilise_dans_une_voiture')}
                    defaultValue={values.immobilise_dans_une_voiture}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="0"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="1"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="2"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="3"/>
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
          >Confirmer
          </Button>
        </Box>

      </Container>
    );
  }
}

export default Form3

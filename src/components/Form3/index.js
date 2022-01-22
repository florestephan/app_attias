import React, {useState, useContext} from 'react';
import {FirebaseContext} from '../Firebase';

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

const Form3 = (props) => {

  const {values, handleChange} = props;
  const firebase = useContext(FirebaseContext);

  // Faire le calcul des scores ici


  const pichot = parseInt(values.manque_energie, 10) + parseInt(values.demande_un_effort, 10) + parseInt(values.faible_certains_endroits_du_corps, 10) + parseInt(values.bras_jambes_lourdes, 10) +
    parseInt(values.fatigue_sans_raison, 10) + parseInt(values.envie_de_se_reposer, 10) + parseInt(values.mal_a_me_concentrer, 10) + parseInt(values.fatigue_lourd_raide, 10);

  const hadA = parseInt(values.tendu_ou_enerve, 10) + parseInt(values.sensation_de_peur, 10) + parseInt(values.faire_du_souci, 10) + parseInt(values.sentir_decontracte_a_ne_rien_faire, 10) +
    parseInt(values.sensation_peur_estomac_noue, 10) + parseInt(values.arrive_pas_a_tenir_en_place, 10) + parseInt(values.sensation_soudaines_de_panique, 10);

  const hadD = parseInt(values.plaisir_aux_meme_chose_autrefois, 10) + parseInt(values.rire_facilement, 10) + parseInt(values.bonne_humeur, 10) +
    parseInt(values.fonctionner_au_ralenti, 10) + parseInt(values.interesse_plus_a_mon_apparence, 10) + parseInt(values.rejouis_a_faire_certaines_choses, 10) + parseInt(values.plaisir_a_lire_ou_autre, 10);

  const epworth = parseInt(values.assis_en_train_de_lire, 10) + parseInt(values.en_regardant_la_television, 10) + parseInt(values.inactif_dans_un_lieu_public, 10) +
    parseInt(values.passager_dans_une_voiture, 10) + parseInt(values.allonge_en_apres_midi, 10) + parseInt(values.assis_en_parlant_avec_une_personne, 10) +
    parseInt(values.assis_apres_un_dejeuner_sans_alcool, 10) + parseInt(values.immobilise_dans_une_voiture, 10);

  const continued = e => {

    firebase.user(Date.now()).set({
      "lastname": values.nom_de_famille,
      "firstname": values.prenom,
      "dob": values.date_de_naissance,
      "sexe": values.sexe,
      "fumeur": values.tabac,
      "sleep_alone": values.dormir_seul,
      "job": values.job,
      "ronflement": values.ronflement,
      "head_sick": values.maux_de_tete,
      "breathe_break": values.pause_respiratoire,
      "pee_night": values.uriner_nuit,
      "memory_issue": values.probleme_memoire,
      "nervous_day": values.irritable,
      "sleep_well": values.sommeil_reparateur,
      "sleep_drive": values.somnolance_volant,
      "car_accident": values.accident_endormissement_volant,
      pichot,
      epworth,
      hadA,
      hadD
    })

    e.preventDefault();
    props.nextstep();
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  const back = e => {
    e.preventDefault();
    props.backstep();
    window.scrollTo({top: 0, behavior: 'smooth'})
  };


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
        <Button sx={{mr: "3rem", mb: "1rem"}}
                color="primary"
                variant="contained"
                onClick={back}
        >Retour
        </Button>

        <Button sx={{mb: "1rem"}}
                color="primary"
                variant="contained"
                onClick={continued}

        >Confirmer
        </Button>
      </Box>

    </Container>
  );
}

export default Form3

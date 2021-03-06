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

  if (values.sexe === "homme") {
    values.sexe = "1"
  } else if (values.sexe === "femme") {
    values.sexe = "0"
  }

  if (values.tabac === "oui") {
    values.tabac = "1"
  } else if (values.tabac === "non") {
    values.tabac = "0"
  }

  if (values.dormir_seul === "oui") {
    values.dormir_seul = "1"
  } else if (values.dormir_seul === "non") {
    values.dormir_seul = "0"
  }

  if (values.ronflement === "oui") {
    values.ronflement = "1"
  } else if (values.ronflement === "non") {
    values.ronflement = "0"
  }

  if (values.maux_de_tete === "oui") {
    values.maux_de_tete = "1"
  } else if (values.maux_de_tete === "non") {
    values.maux_de_tete = "0"
  }

  if (values.pause_respiratoire === "oui") {
    values.pause_respiratoire = "1"
  } else if (values.pause_respiratoire === "non") {
    values.pause_respiratoire = "0"
  }

  if (values.probleme_memoire === "oui") {
    values.probleme_memoire = "1"
  } else if (values.probleme_memoire === "non") {
    values.probleme_memoire = "0"
  }

  if (values.irritable === "oui") {
    values.irritable = "1"
  } else if (values.irritable === "non") {
    values.irritable = "0"
  }

  if (values.sommeil_reparateur === "oui") {
    values.sommeil_reparateur = "1"
  } else if (values.sommeil_reparateur === "non") {
    values.sommeil_reparateur = "0"
  }

  if (values.somnolance_volant === "oui") {
    values.somnolance_volant = "1"
  } else if (values.somnolance_volant === "non") {
    values.somnolance_volant = "0"
  }

  if (values.accident_endormissement_volant === "oui") {
    values.accident_endormissement_volant = "1"
  } else if (values.accident_endormissement_volant === "non") {
    values.accident_endormissement_volant = "0"
  }


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
              ??chelle de somnolence d'epworth
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <br/>

      <Typography variant="body2">Afin de pouvoir mesurer chez vous une ??ventuelle somnolence dans la journ??e, voici
        quelques
        situations relativement usuelles, o?? nous vous demandons d'??valuer le risque de vous assoupir.
        Aussi, si vous n'avez pas ??t?? r??cemment dans l'une de ces situations, essayez d'imaginer comment
        cette situation pourrait vous affecter.
      </Typography>

      <br/>

      <Typography variant="body2" color="red">Pour r??pondre, utilisez l'??chelle suivante en entourant le chiffre le
        plus appropri?? pour chaque
        situation :
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemText secondary="0 = aucune chance de somnoler ou de s???endormir"/>
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

      <FormLabel component="legend">En train de regarder la t??l??vision</FormLabel>
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

      <FormLabel component="legend">Assis, inactif dans un lieu public (cin??ma, th????tre, r??union)</FormLabel>
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

      <FormLabel component="legend">Comme passager d'une voiture (ou transport en commun) roulant sans arr??t
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

      <FormLabel component="legend">Allong?? l'apr??s-midi lorsque les circonstances le permettent</FormLabel>
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

      <FormLabel component="legend">??tant assis en parlant avec quelqu'un</FormLabel>
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

      <FormLabel component="legend">Assis au calme apr??s un d??jeuner sans alcool</FormLabel>
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

      <FormLabel component="legend">Dans une voiture immobilis??e depuis quelques minutes</FormLabel>
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

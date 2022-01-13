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

        <Typography variant="body1">{values.nom_de_famille}</Typography>
        <Typography variant="body1">{values.prenom}</Typography>
        <Typography variant="body1">{values.date_de_naissance}</Typography>
        <Typography variant="body1">{values.sexe}</Typography>
        <Typography variant="body1">{values.tabac}</Typography>
        <Typography variant="body1">{values.dormir_seul}</Typography>
        <Typography variant="body1">{values.job}</Typography>
        <Typography variant="body1">{values.ronflement}</Typography>
        <Typography variant="body1">{values.maux_de_tete}</Typography>
        <Typography variant="body1">{values.pause_respiratoire}</Typography>
        <Typography variant="body1">{values.uriner_nuit}</Typography>
        <Typography variant="body1">{values.probleme_memoire}</Typography>
        <Typography variant="body1">{values.irritable}</Typography>
        <Typography variant="body1">{values.sommeil_reparateur}</Typography>
        <Typography variant="body1">{values.somnolance_volant}</Typography>
        <Typography variant="body1">{values.accident_endormissement_volant}</Typography>
        <Typography variant="body1">Pichot score = {pichot}</Typography>
        <Typography variant="body1">HAD score = Total A = {hadA} & Total D = {hadD}</Typography>
        <Typography variant="body1">Epworth score = {epworth}</Typography>


      </Container>
    );
  }
}

export default FormConfirmation

import * as React from "react";
import './styles.scss';
import FormGeneral from "../FormGeneral";
import Form1 from "../Form1";
import Form2 from "../Form2";
import Form3 from "../Form3";
import FormConfirmation from "../FormConfirmation";

class FormContainer extends React.Component {

  //On définit le component FormContainer ainsi que les props
  //Le state permet de stocker les datas dans la le component
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      nom_de_famille: '',
      prenom: '',
      date_de_naissance: '',
      sexe: '',
      tabac: '',
      dormir_seul: '',
      job: '',
      ronflement: '',
      maux_de_tete: '',
      pause_respiratoire: '',
      uriner_nuit: '',
      probleme_memoire: '',
      irritable: '',
      sommeil_reparateur: '',
      somnolance_volant: '',
      accident_endormissement_volant: '',
      manque_energie: '',
      demande_un_effort: '',
      faible_certains_endroits_du_corps: '',
      bras_jambes_lourdes: '',
      fatigue_sans_raison: '',
      envie_de_se_reposer: '',
      mal_a_me_concentrer: '',
      fatigue_lourd_raide: '',
      tendu_ou_enerve: '',
      plaisir_aux_meme_chose_autrefois: '',
      sensation_de_peur: '',
      rire_facilement: '',
      faire_du_souci: '',
      bonne_humeur: '',
      sentir_decontracte_a_ne_rien_faire: '',
      fonctionner_au_ralenti: '',
      sensation_peur_estomac_noue: '',
      interesse_plus_a_mon_apparence: '',
      arrive_pas_a_tenir_en_place: '',
      rejouis_a_faire_certaines_choses: '',
      sensation_soudaines_de_panique: '',
      plaisir_a_lire_ou_autre: '',
      assis_en_train_de_lire: '',
      en_regardant_la_television: '',
      inactif_dans_un_lieu_public: '',
      passager_dans_une_voiture: '',
      allonge_en_apres_midi: '',
      assis_en_parlant_avec_une_personne: '',
      assis_apres_un_dejeuner_sans_alcool: '',
      immobilise_dans_une_voiture: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  };

  backStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Permet de changer le state du champs
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  };

  //Permet de renvoyer les résultat apres le submit
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const {step} = this.state;
    const {
      nom_de_famille,
      prenom,
      date_de_naissance,
      sexe,
      tabac,
      dormir_seul,
      job,
      ronflement,
      maux_de_tete,
      pause_respiratoire,
      uriner_nuit,
      probleme_memoire,
      irritable,
      sommeil_reparateur,
      somnolance_volant,
      accident_endormissement_volant,
      manque_energie,
      demande_un_effort,
      faible_certains_endroits_du_corps,
      bras_jambes_lourdes,
      fatigue_sans_raison,
      envie_de_se_reposer,
      mal_a_me_concentrer,
      fatigue_lourd_raide,
      tendu_ou_enerve,
      plaisir_aux_meme_chose_autrefois,
      sensation_de_peur,
      rire_facilement,
      faire_du_souci,
      bonne_humeur,
      sentir_decontracte_a_ne_rien_faire,
      fonctionner_au_ralenti,
      sensation_peur_estomac_noue,
      interesse_plus_a_mon_apparence,
      arrive_pas_a_tenir_en_place,
      rejouis_a_faire_certaines_choses,
      sensation_soudaines_de_panique,
      plaisir_a_lire_ou_autre,
      assis_en_train_de_lire,
      en_regardant_la_television,
      inactif_dans_un_lieu_public,
      passager_dans_une_voiture,
      allonge_en_apres_midi,
      assis_en_parlant_avec_une_personne,
      assis_apres_un_dejeuner_sans_alcool,
      immobilise_dans_une_voiture
    } = this.state;
    const values = {
      nom_de_famille,
      prenom,
      date_de_naissance,
      sexe,
      tabac,
      dormir_seul,
      job,
      ronflement,
      maux_de_tete,
      pause_respiratoire,
      uriner_nuit,
      probleme_memoire,
      irritable,
      sommeil_reparateur,
      somnolance_volant,
      accident_endormissement_volant,
      manque_energie,
      demande_un_effort,
      faible_certains_endroits_du_corps,
      bras_jambes_lourdes,
      fatigue_sans_raison,
      envie_de_se_reposer,
      mal_a_me_concentrer,
      fatigue_lourd_raide,
      tendu_ou_enerve,
      plaisir_aux_meme_chose_autrefois,
      sensation_de_peur,
      rire_facilement,
      faire_du_souci,
      bonne_humeur,
      sentir_decontracte_a_ne_rien_faire,
      fonctionner_au_ralenti,
      sensation_peur_estomac_noue,
      interesse_plus_a_mon_apparence,
      arrive_pas_a_tenir_en_place,
      rejouis_a_faire_certaines_choses,
      sensation_soudaines_de_panique,
      plaisir_a_lire_ou_autre,
      assis_en_train_de_lire,
      en_regardant_la_television,
      inactif_dans_un_lieu_public,
      passager_dans_une_voiture,
      allonge_en_apres_midi,
      assis_en_parlant_avec_une_personne,
      assis_apres_un_dejeuner_sans_alcool,
      immobilise_dans_une_voiture
    };

    switch (step) {
      case 1:
        return (
          <FormGeneral nextstep={this.nextStep} handleChange={this.handleChange} values={values}/>
        );
      case 2:
        return (
          <Form1 nextstep={this.nextStep} backstep={this.backStep} handleChange={this.handleChange} values={values}/>
        );

      case 3:
        return (
          <Form2 nextstep={this.nextStep} backstep={this.backStep} handleChange={this.handleChange} values={values}/>
        );

      case 4:
        return (
          <Form3 nextstep={this.nextStep} backstep={this.backStep} handleChange={this.handleChange} values={values}/>
        );

      case 5:
        return (
          <FormConfirmation handleChange={this.handleChange} values={values}/>
        );
    }

  }

}

export default FormContainer

import * as React from "react";
import './styles.scss';
import FormGeneral from "../FormGeneral";
import Form1 from "../Form1";


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
      "dormir_seul": '',
      ronflement: '',
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
      fatigue_lourd_raide: ''
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
      fatigue_lourd_raide
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
      fatigue_lourd_raide
    };

    switch (step) {
      case 1:
        return (
          <FormGeneral nextstep={this.nextStep} handleChange={this.handleChange} values={values}/>
        );
      case 2:
        return (
          <Form1 nexstep={this.nextStep} backstep={this.backStep} handleChange={this.handleChange} values={values}/>
        );

      case 3:
        return (<h1>Form2</h1>);
    }

  }

}

export default FormContainer

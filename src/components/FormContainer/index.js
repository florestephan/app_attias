import * as React from "react";
import './styles.scss';

{/*
import FormGeneral from "../FormGeneral";
*/
}

class FormContainer extends React.Component {

  //On définit le component FormContainer ainsi que les props
  //Le state permet de stocker les datas dans la le component
  constructor(props) {
    super(props);
    this.state = {
      nom_de_famille: '',
      prenom: '',
      date_de_naissance: '',
      sexe: '',
      tabac: '',
      "dormir_seul(e)": '',
      metier: '',
      ronflement: '',
      pause_respiratoire: '',
      uriner_nuit: '',
      probleme_memoire: '',
      irritable: '',
      sommeil_reparateur: '',
      somnolance_volant: '',
      accident_endormissement_volant: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  // Permet de changer le state du champs
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  //Permet de renvoyer les résultat apres le submit
  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (

      <form className="form" onSubmit={this.handleSubmit}>

        <header className="header">
          <h1 className="header__h1">Questionnaire salle d'attente</h1>
          <h2 className="header__h2">Informations générales</h2>

        </header>


        <div className="form__lastname">
          <label htmlFor="lastname">Votre Nom</label>
          <input type="text" id="lastname" name="nom_de_famille" onChange={this.handleChange}/>
        </div>

        <div className="form__firstname">
          <label htmlFor="firstname">Votre Prénom</label>
          <input type="text" id="firstname" name="prenom" onChange={this.handleChange}/>
        </div>

        <div className="form__dob">
          <label htmlFor="dob">Date de naissance</label>
          <input type="date" id="dob" name="date_de_naissance" onChange={this.handleChange}/>
        </div>

        <div className="form__gender">
          <label htmlFor="gender">Sexe</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="homme" name="sexe"/> Homme
            <input type="radio" value="femme" name="sexe"/> Femme
          </div>
        </div>

        <div className="form__tabac">
          <label htmlFor="tabac">Vous êtes fumeur/fumeuse ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="tabac"/> Oui
            <input type="radio" value="non" name="tabac"/> Non
          </div>
        </div>

        <div className="form__sleep">
          <label htmlFor="sleep">Dormez-vous seul(e) ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="dormir_seul(e)"/> Oui
            <input type="radio" value="non" name="dormir_seul(e)"/> Non
          </div>
        </div>

        <div className="form__job">
          <label htmlFor="job">Profession </label>
          <input type="text" id="job" name="metier" onChange={this.handleChange}/>
        </div>

        <div className="form__snore">
          <label htmlFor="snore">Ronflement ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="ronflement"/> Oui
            <input type="radio" value="non" name="ronflement"/> Non
          </div>
        </div>

        <div className="form__headache">
          <label htmlFor="headache">Maux de tête le matin ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="maux_de_tete"/> Oui
            <input type="radio" value="non" name="maux_de_tete"/> Non
          </div>
        </div>

        <div className="form__breathingPause">
          <label htmlFor="breathingPause">Avez-vous ressenti ou vous a–t-on rapporté que vous faites des pauses
            respiratoires la nuit ? </label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="pause_respiratoire"/> Oui
            <input type="radio" value="non" name="pause_respiratoire"/> Non
          </div>
        </div>

        <div className="form__urinate">
          <label htmlFor="urinate">Combien de fois allez vous uriner la nuit ? </label>
          <input type="number" id="urinate" name="uriner_nuit" onChange={this.handleChange}/>
        </div>

        <div className="form__focusMemory">
          <label htmlFor="focusMemory">Avez-vous des problèmes de concentration/ de mémoire la journée ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="probleme_memoire"/> Oui
            <input type="radio" value="non" name="probleme_memoire"/> Non
          </div>
        </div>

        <div className="form__techy">
          <label htmlFor="techy">Etes vous irritable la journée ? </label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="irritable"/> Oui
            <input type="radio" value="non" name="irritable"/> Non
          </div>
        </div>

        <div className="form__restfulSleep">
          <label htmlFor="restfulSleep">Considérez vous que votre sommeil est réparateur ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="sommeil_reparateur"/> Oui
            <input type="radio" value="non" name="sommeil_reparateur"/> Non
          </div>
        </div>

        <div className="form__drivingDrowsiness">
          <label htmlFor="drivingDrowsiness">Avez-vous de la somnolence au volant ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="somnolance_volant"/> Oui
            <input type="radio" value="non" name="somnolance_volant"/> Non
          </div>
        </div>

        <div className="form__accidentDueToDrowsiness">
          <label htmlFor="accidentDueToDrowsiness">Avez-vous eu un accident lié à un endormissement au volant
            ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="accident_endormissement_volant"/> Oui
            <input type="radio" value="non" name="accident_endormissement_volant"/> Non
          </div>
        </div>

        {/*
        <div className="form__select">
          <label htmlFor="select">Veuillez choisir votre metier </label>
          <select value={this.state.select} name="select" onChange={this.handleChange}>
            <option value="job1">Métier 1</option>
            <option value="job2">Métier 2</option>
            <option value="job3">Métier 3</option>
          </select>
        </div>
        */}
        <input type="submit" value="Envoyer" className="form__submit"/>

      </form>

    );
  }

}

export default FormContainer

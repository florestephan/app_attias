import * as React from "react";
import './styles.scss';

class FormItem extends React.Component {

  //On définit le component FormItem ainsi que les props
  //Le state permet de stocker les datas dans la le component
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',
      firstname: '',
      dob: '',
      gender: '',
      tabac: '',
      sleep: '',
      job: '',
      snore: '',
      breathingPause: '',
      urinate: '',
      focusMemory: '',
      techy: '',
      restfulSleep: '',
      drivingDrowsiness: '',
      accidentDueToDrowsiness: '',
      select: 'job1'
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
    console.log('Le Nom est ' + this.state.lastname + ' Le métier est ' + this.state.select + ' Le prénom est ' + this.state.firstname + ' La dob est ' + this.state.dob +
      ' le genre est ' + this.state.gender);
    event.preventDefault();
  }

  render() {
    return (

      <form className="form" onSubmit={this.handleSubmit}>

        <h1 className="title__h1">Informations générales</h1>


        <div className="form__lastname">
          <label htmlFor="lastname">Votre Nom</label>
          <input type="text" id="lastname" name="lastname" onChange={this.handleChange}/>
        </div>

        <div className="form__firstname">
          <label htmlFor="firstname">Votre Prénom</label>
          <input type="text" id="firstname" name="firstname" onChange={this.handleChange}/>
        </div>

        <div className="form__dob">
          <label htmlFor="dob">Date de naissance</label>
          <input type="date" id="dob" name="dob" onChange={this.handleChange}/>
        </div>

        <div className="form__gender">
          <label htmlFor="gender">Sexe</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="homme" name="gender"/> Homme
            <input type="radio" value="femme" name="gender"/> Femme
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
            <input type="radio" value="oui" name="sleep"/> Oui
            <input type="radio" value="non" name="sleep"/> Non
          </div>
        </div>

        <div className="form__job">
          <label htmlFor="job">Profession </label>
          <input type="text" id="job" name="job" onChange={this.handleChange}/>
        </div>

        <div className="form__snore">
          <label htmlFor="snore">Ronflement ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="snore"/> Oui
            <input type="radio" value="non" name="snore"/> Non
          </div>
        </div>

        <div className="form__headache">
          <label htmlFor="headache">Maux de tête le matin ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="headache"/> Oui
            <input type="radio" value="non" name="headache"/> Non
          </div>
        </div>

        <div className="form__breathingPause">
          <label htmlFor="breathingPause">Avez-vous ressenti ou vous a –t-on rapporté que vous faites des pauses
            respiratoires la nuit ? </label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="breathingPause"/> Oui
            <input type="radio" value="non" name="breathingPause"/> Non
          </div>
        </div>

        <div className="form__urinate">
          <label htmlFor="urinate">Combien de fois allez vous uriner la nuit ? </label>
          <input type="number" id="urinate" name="urinate" onChange={this.handleChange}/>
        </div>

        <div className="form__focusMemory">
          <label htmlFor="focusMemory">Avez-vous des problèmes de concentration/ de mémoire la journée ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="focusMemory"/> Oui
            <input type="radio" value="non" name="focusMemory"/> Non
          </div>
        </div>

        <div className="form__techy">
          <label htmlFor="techy">Etes vous irritable la journée ? </label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="techy"/> Oui
            <input type="radio" value="non" name="techy"/> Non
          </div>
        </div>

        <div className="form__restfulSleep">
          <label htmlFor="restfulSleep">Considérez vous que votre sommeil est réparateur ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="restfulSleep"/> Oui
            <input type="radio" value="non" name="restfulSleep"/> Non
          </div>
        </div>

        <div className="form__drivingDrowsiness">
          <label htmlFor="drivingDrowsiness">Avez-vous de la somnolence au volant ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="drivingDrowsiness"/> Oui
            <input type="radio" value="non" name="drivingDrowsiness"/> Non
          </div>
        </div>

        <div className="form__accidentDueToDrowsiness">
          <label htmlFor="accidentDueToDrowsiness">Avez-vous eu un accident lié à un endormissement au volant ?</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="oui" name="accidentDueToDrowsiness"/> Oui
            <input type="radio" value="non" name="accidentDueToDrowsiness"/> Non
          </div>
        </div>


        <div className="form__select">
          <label htmlFor="select">Veuillez choisir votre metier </label>
          <select value={this.state.select} name="select" onChange={this.handleChange}>
            <option value="job1">Métier 1</option>
            <option value="job2">Métier 2</option>
            <option value="job3">Métier 3</option>
          </select>
        </div>

        <input type="submit" value="Envoyer" className="form__submit"/>

      </form>

    );
  }

}

export default FormItem

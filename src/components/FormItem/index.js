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
      select: 'job1',
      dob: '',
      gender: ''
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
          <label htmlFor="gender">Date de naissance</label>
          <div onChange={this.handleChange}>
            <input type="radio" value="homme" name="gender"/> Homme
            <input type="radio" value="femme" name="gender"/> Femme
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

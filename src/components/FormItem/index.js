import * as React from "react";
import './styles.scss';

class FormItem extends React.Component {

  //On définit le component FormItem ainsi que les props
  //Le state permet de stocker les datas dans la le component
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      select: ''
    }
    this.handleChange = this.handleChange.bind(this)

  }

  // Permet de changer le state du champs
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }

  render() {
    return (
      <div className="form">

        <div className="form__name">
          <label htmlFor="nom">Votre nom</label>
          <input type="text" id="nom" name="nom" onChange={this.handleChange}/>
        </div>

        <div className="form__select">
          <select id="select" name="select" onChange={this.handleChange}>
            <option value="job1">Métier 1</option>
            <option value="job2">Métier 2</option>
            <option value="job3">Métier 3</option>
          </select>
        </div>
      </div>
    );
  }

}

export default FormItem

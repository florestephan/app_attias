import * as React from "react";
import './styles.scss';

import FormChoice from "../FormChoice/index";
import {ModelsForm} from "../../data/ModelsForm";

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: ModelsForm
    };
  }

  render() {
    return (
      <div className="content">
        <header className="header">
          <h2 className="header__h2">Chaques questionnaires est à remplir obligatoirement</h2>
        </header>

        {this.state.forms.map((form, index) => {
          return <FormChoice key={index} id={form.id}/>
        })}

      </div>
    );
  }
}


export default Form1

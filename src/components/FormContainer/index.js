import * as React from "react";
import './styles.scss';

import FormChoice from "../FormChoice/index";
import {ModelsForm} from "../../data/ModelsForm";

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: ModelsForm
    };
  }

  render() {
    return (
      <div>

        {this.state.forms.map((form, index) => {
          return <FormChoice key={index} id={form.id}/>
        })}

      </div>
    );
  }
}


export default FormContainer

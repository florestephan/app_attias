import * as React from "react";
import './styles.scss';



import FormItem from "../FormItem/index";
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
          return <FormItem
            key={index}
            name={form.libelle}

          />

        })}

      </div>
    );
  }
}


export default FormContainer

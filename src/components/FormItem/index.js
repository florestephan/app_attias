import * as React from "react";
import './styles.scss';

const FormItem = () => (
  <div>
    <form>
      <label>
        Nom :
        <input type="text" name="name"/>
      </label>
      <input type="submit" value="Envoyer"/>
    </form>
  </div>

);

export default FormItem

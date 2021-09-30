import * as React from "react";
import './styles.scss';
import Button from '@mui/material/Button';


class FormGeneral extends React.Component {

  continue = e => {
    e.preventDefault();
    this.props.nextstep()
  };

  render() {

    return (
      <Button
        color="primary"
        variant="contained"
        onClick={this.continue}
      >Continue
      </Button>
    );
  }
}


export default FormGeneral

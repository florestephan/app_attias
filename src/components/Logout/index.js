import React, {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from '../Firebase';

import {Box, FormControlLabel, Switch} from '@mui/material/';

const Logout = () => {

  const firebase = useContext(FirebaseContext);

  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    if (checked) {
      console.log('Logout')
      firebase.signoutUser();
    }
  }, [checked, firebase]);


  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{'& > button': {m: 1}}}>
      <FormControlLabel
        sx={{
          display: 'block',
          textAlign: 'right'
        }}
        control={
          <Switch
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            name="logout"
            color="primary"
          />
        }
        label="Déconnexion"
      />
    </Box>
  )
};

export default Logout;

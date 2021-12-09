import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";
import {FirebaseContext} from '../Firebase';

import "./styles.scss";
import {
  CardContent,
  CardActions,
  Card,
  Box,
  FormLabel,
  Button,
  TextField,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Alert
} from "@mui/material/";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Auth = (props) => {

  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    firebase.loginUser(email, password)

      .then(user => {
        setEmail('');
        setPassword('');
        props.history.push('/Welcome');
      })

      .catch(error => {
        setError(error);
        setEmail('');
        setPassword('');
      })
  };

  return (
    <Container>
      <header>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              <Link to="/">Questionnaire salle d'attente</Link>
            </Typography>
            <Typography component="div" sx={{flexGrow: 1}}>
              Espace docteur
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <form>

        <Box
          className="testeur"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '83vh'
          }}>
          <AccountCircleIcon
            sx={{
              fontSize: "4rem",
              position: "relative",
              top: "30px",
              color: "#1976d2"
            }}/>

          <Card
            sx={{
              minWidth: 350,
              minHeight: 350,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: '#f7faff'
            }}>
            <CardContent sx={{
              display: 'flex',
              flexDirection: 'column'
            }}>
              <TextField
                variant="outlined"
                placeholder="Email"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
                sx={{pb: "1rem"}}
              />
              <TextField
                variant="outlined"
                placeholder="Mot de passe"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                sx={{pb: "1rem"}}
              />

              {error !== '' && <Alert severity="error">{error.message}</Alert>}

            </CardContent>
            <CardActions>
              <Button onClick={handleSubmit} type="button" variant="contained">
                Connexion
              </Button>
            </CardActions>
          </Card>
        </Box>
      </form>
    </Container>

  )
}

export default Auth;

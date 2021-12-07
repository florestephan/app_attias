import React from 'react';
import "./styles.scss";
import {FormLabel, Button, TextField, Container, AppBar, Toolbar, Typography} from "@mui/material/";
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

class Auth extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({[e.currentTarget.id]: e.currentTarget.value});
  };

  render() {

    return (
      <Container>
        <form>
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
                  handleChange={this.handleChange}
                  type="text"
                  sx={{pb: "1rem"}}
                />
                <TextField
                  variant="outlined"
                  placeholder="Mot de passe"
                  id="password"
                  value={password}
                  handleChange={this.handleChange}
                  type="password"
                  sx={{pb: "1rem"}}
                />
              </CardContent>
              <CardActions>
                <Button type="button" variant="contained">
                  Connexion
                </Button>
              </CardActions>
            </Card>
          </Box>
        </form>
      </Container>
    );
  }
}

export default Auth

import * as React from "react";
import './styles.scss';
import {
  TextField,
  Typography,
  Toolbar,
  AppBar,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Container,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material/';

class Form2 extends React.Component {

  continue = e => {
    e.preventDefault();
    this.props.nextstep();
    window.scrollTo({top: 0, behavior: 'smooth'})
  };

  back = e => {
    e.preventDefault();
    this.props.backstep();
    window.scrollTo({top: 0, behavior: 'smooth'})
  };


  render() {

    const {values, handleChange} = this.props;

    return (
      <Container>
        <header>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Questionnaire salle d'attente
              </Typography>
              <Typography component="div" sx={{flexGrow: 1}}>
                Échelle HAD : Hospital Anxiety and Depression scale
              </Typography>
            </Toolbar>
          </AppBar>
        </header>

        <br/>

        <Typography variant="body2">L’échelle HAD est un instrument qui permet de dépister les troubles
          anxieux et dépressifs. Sept questions se rapportent à l’anxiété et sept autres à la dimension dépressive.
        </Typography>

        <br/>
        <Divider/>
        <br/>

        <FormLabel component="legend">Je me sens tendu(e) ou énervé(e) </FormLabel>
        <br/>
        <RadioGroup row aria-label="tendu_ou_enerve" name="row-radio-buttons-group"
                    onChange={handleChange('tendu_ou_enerve')} defaultValue={values.tendu_ou_enerve}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="Jamais"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="De temps en temps"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="Souvent"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="La plupart du temps"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Je prends plaisir aux mêmes choses qu’autrefois</FormLabel>
        <br/>
        <RadioGroup row aria-label="plaisir_aux_meme_chose_autrefois" name="row-radio-buttons-group"
                    onChange={handleChange('plaisir_aux_meme_chose_autrefois')}
                    defaultValue={values.plaisir_aux_meme_chose_autrefois}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="Oui, tout autant"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>} label="Pas autant"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>} label="Un peu seulement"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Presque plus"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">J’ai une sensation de peur comme si quelque chose d’horrible allait
          m’arriver </FormLabel>
        <br/>
        <RadioGroup row aria-label="sensation_de_peur" name="row-radio-buttons-group"
                    onChange={handleChange('sensation_de_peur')}
                    defaultValue={values.sensation_de_peur}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="Pas du tout"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Un peu, mais cela ne m’inquiète pas"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Oui, mais ce n’est pas trop grave"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Oui, très nettement"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Je ris facilement et vois le bon côté des choses</FormLabel>
        <br/>
        <RadioGroup row aria-label="rire_facilement" name="row-radio-buttons-group"
                    onChange={handleChange('rire_facilement')}
                    defaultValue={values.rire_facilement}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="Autant que par le passé"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Plus autant qu’avant"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Vraiment moins qu’avant"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Plus du tout"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Je me fais du souci</FormLabel>
        <br/>
        <RadioGroup row aria-label="faire_du_souci" name="row-radio-buttons-group"
                    onChange={handleChange('faire_du_souci')}
                    defaultValue={values.faire_du_souci}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="Très occasionnellement"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Occasionnellement "/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Assez souvent"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Très souvent"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Je suis de bonne humeur</FormLabel>
        <br/>
        <RadioGroup row aria-label="bonne_humeur" name="row-radio-buttons-group"
                    onChange={handleChange('bonne_humeur')}
                    defaultValue={values.bonne_humeur}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="La plupart du temps"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Assez souvent"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Rarement"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Jamais"/>
        </RadioGroup>
        <br/>


        <FormLabel component="legend">Je peux rester tranquillement assis(e) à ne rien
          faire et me sentir décontracté(e)</FormLabel>
        <br/>
        <RadioGroup row aria-label="sentir_decontracte_a_ne_rien_faire" name="row-radio-buttons-group"
                    onChange={handleChange('sentir_decontracte_a_ne_rien_faire')}
                    defaultValue={values.sentir_decontracte_a_ne_rien_faire}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="Oui, quoi qu’il arrive"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Oui, en général"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Rarement"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Jamais"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">J’ai l’impression de fonctionner au ralenti</FormLabel>
        <br/>
        <RadioGroup row aria-label="fonctionner_au_ralenti" name="row-radio-buttons-group"
                    onChange={handleChange('fonctionner_au_ralenti')}
                    defaultValue={values.fonctionner_au_ralenti}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="Jamais"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Parfois"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Très souvent"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Presque toujours"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">J’éprouve des sensations de peur et j’ai l’estomac noué</FormLabel>
        <br/>
        <RadioGroup row aria-label="sensation_peur_estomac_noue" name="row-radio-buttons-group"
                    onChange={handleChange('sensation_peur_estomac_noue')}
                    defaultValue={values.sensation_peur_estomac_noue}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>} label="Jamais"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Parfois"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Assez souvent"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Très souvent"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Je ne m’intéresse plus à mon apparence</FormLabel>
        <br/>
        <RadioGroup row aria-label="interesse_plus_a_mon_apparence" name="row-radio-buttons-group"
                    onChange={handleChange('interesse_plus_a_mon_apparence')}
                    defaultValue={values.interesse_plus_a_mon_apparence}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>}
                            label="J’y prête autant d’attention que par le passé"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Il se peut que je n’y fasse plus autant attention"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Je n’y accorde pas autant d’attention que je devrais"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Plus du tout"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">J’ai la bougeotte et n’arrive pas à tenir en place</FormLabel>
        <br/>
        <RadioGroup row aria-label="arrive_pas_a_tenir_en_place" name="row-radio-buttons-group"
                    onChange={handleChange('arrive_pas_a_tenir_en_place')}
                    defaultValue={values.arrive_pas_a_tenir_en_place}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>}
                            label="Pas du tout"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Pas tellement"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Un peu"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Oui, c’est tout à fait le cas"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Je me réjouis d’avance à l’idée de faire certaines choses</FormLabel>
        <br/>
        <RadioGroup row aria-label="rejouis_a_faire_certaines_choses" name="row-radio-buttons-group"
                    onChange={handleChange('rejouis_a_faire_certaines_choses')}
                    defaultValue={values.rejouis_a_faire_certaines_choses}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>}
                            label="Autant qu’avant"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Un peu moins qu’avant"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Bien moins qu’avant"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Presque jamais"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">J’éprouve des sensations soudaines de panique</FormLabel>
        <br/>
        <RadioGroup row aria-label="sensation_soudaines_de_panique" name="row-radio-buttons-group"
                    onChange={handleChange('sensation_soudaines_de_panique')}
                    defaultValue={values.sensation_soudaines_de_panique}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>}
                            label="Jamais"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Pas très souvent"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Assez souvent"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Vraiment très souvent"/>
        </RadioGroup>
        <br/>

        <FormLabel component="legend">Je peux prendre plaisir à un bon livre ou à une bonne émission de radio ou de
          télévision</FormLabel>
        <br/>
        <RadioGroup row aria-label="plaisir_a_lire_ou_autre" name="row-radio-buttons-group"
                    onChange={handleChange('plaisir_a_lire_ou_autre')}
                    defaultValue={values.plaisir_a_lire_ou_autre}>
          <FormControlLabel labelPlacement="top" value="0" control={<Radio/>}
                            label="Souvent"/>
          <FormControlLabel labelPlacement="top" value="1" control={<Radio/>}
                            label="Parfois"/>
          <FormControlLabel labelPlacement="top" value="2" control={<Radio/>}
                            label="Rarement"/>
          <FormControlLabel labelPlacement="top" value="3" control={<Radio/>} label="Très rarement"/>
        </RadioGroup>
        <br/>

        <Box textAlign='center'>
          <Button sx={{mr: "3rem", mb: "1rem"}}
                  color="primary"
                  variant="contained"
                  onClick={this.back}
          >Retour
          </Button>

          <Button sx={{mb: "1rem"}}
                  color="primary"
                  variant="contained"
                  onClick={this.continue}

          >Continue
          </Button>
        </Box>

      </Container>
    );
  }
}

export default Form2

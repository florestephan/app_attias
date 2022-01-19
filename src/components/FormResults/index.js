import React, {useState, useContext} from 'react';
import {FirebaseContext} from '../Firebase';
import {CSVLink, CSVDownload} from "react-csv";
import {Container} from "@mui/material";

const FormResults = () => {

  const firebase = useContext(FirebaseContext);
  const [data, setData] = useState('');


  firebase.data('forms').get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setData(doc.data())
      });
    });

  let object =
    {
      "Problèmes de mémoire la journée ?": "non",
      "Maux de tête le matin ?": "non",
      "hadD": 19,
      "Profession": "dsfgdsgdfsgds",
      "Etes vous irritable la journée ?": "non",
      "Prénom": "Stéphan",
      "DOB": "1998-12-30",
      "Sexe": "homme",
      "Fumeur": "non",
      "hadA": 21,
      "Nom de famille": "Flores",
      "Somnolence au volant ?": "non",
      "Ronflement": "non",
      "epworth": 24,
      "Nomnres d'urine par nuit ?": "4",
      "Sommeil est réparateur ?": "non",
      "Accident endormissement au volant ?": "non",
      "pichot": 32,
      "Dormez-vous seul(e)": "non",
      "Pauses respiratoires la nuit ?": "non"
    }


  return (
    <Container>
    </Container>
  )
};

export default FormResults;

import React, {useEffect} from "react";
import {Typography} from "./components/FormConfirmation";

let newArray = [];

for (let i = 0; i < arrayData.length; i++) {
  newArray.push(arrayData[i].lastname);
  newArray.push(arrayData[i].dob);
  newArray.push(arrayData[i].sexe);
  newArray.push(arrayData[i].fumeur);
  newArray.push(arrayData[i].sleep_alone);
  newArray.push(arrayData[i].job);
  newArray.push(arrayData[i].ronflement);
  newArray.push(arrayData[i].head_sick);
  newArray.push(arrayData[i].breathe_break);
  newArray.push(arrayData[i].pee_night);
  newArray.push(arrayData[i].memory_issue);
  newArray.push(arrayData[i].nervous_day);
  newArray.push(arrayData[i].sleep_well);
  newArray.push(arrayData[i].sleep_drive);
  newArray.push(arrayData[i].car_accident);
  newArray.push(arrayData[i].pichot);
  newArray.push(arrayData[i].hadA);
  newArray.push(arrayData[i].hadD);
  newArray.push(arrayData[i].epworth);
}

useEffect(() => {
  firebase.data('forms').get()
    .then((doc) => {
      doc.forEach((doc) => {
        const myData = doc.data();
        setData(myData)
        array.push(myData)
        setArray(array)
      })
    });
}, [])



useEffect(() => {
  const fetchData = async () => {
    try {
      const doc = await firebase.data("forms")
        .get();

      doc.forEach((doc) => {
        const myData = doc.data();
        setData(myData)
        array.push(myData)
        setArray(array)
      })
    } catch (err) {
      console.error(err);
    }
  };

  fetchData();

}, []);


<Typography variant="body1">{values.nom_de_famille}</Typography>
<Typography variant="body1">{values.prenom}</Typography>
<Typography variant="body1">{values.date_de_naissance}</Typography>
<Typography variant="body1">{values.sexe}</Typography>
<Typography variant="body1">{values.tabac}</Typography>
<Typography variant="body1">{values.dormir_seul}</Typography>
<Typography variant="body1">{values.job}</Typography>
<Typography variant="body1">{values.ronflement}</Typography>
<Typography variant="body1">{values.maux_de_tete}</Typography>
<Typography variant="body1">{values.pause_respiratoire}</Typography>
<Typography variant="body1">{values.uriner_nuit}</Typography>
<Typography variant="body1">{values.probleme_memoire}</Typography>
<Typography variant="body1">{values.irritable}</Typography>
<Typography variant="body1">{values.sommeil_reparateur}</Typography>
<Typography variant="body1">{values.somnolance_volant}</Typography>
<Typography variant="body1">{values.accident_endormissement_volant}</Typography>
<Typography variant="body1">Pichot score = {pichot}</Typography>
<Typography variant="body1">HAD score = Total A = {hadA} & Total D = {hadD}</Typography>
<Typography variant="body1">Epworth score = {epworth}</Typography>

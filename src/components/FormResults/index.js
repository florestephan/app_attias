import React, {useState, useContext, useEffect, useLayoutEffect} from 'react';
import {FirebaseContext} from '../Firebase';

import Header from "src/components/Header";
import Customers from "src/components/Customers";
import ExportCSV from "src/components/ExportCSV";
import ExportReactCSV from "src/components/ExportReactCSV";
// enfait le rendu est exécuté trop vite avant la fin de use effect

const FormResults = () => {
  const firebase = useContext(FirebaseContext);
  const [data, setData] = useState({});
  const [arrayData, setArray] = useState({});

  const array = [];

  useLayoutEffect(() => {
    firebase.data('forms').get()
      .then((doc) => {
        doc.forEach((doc) => {
          const myData = doc.data();
          setData(myData)
          array.push(myData)
          setArray(array)
        })
      });
  }, [arrayData])

  const headers = [
    {label: "Prénom", key: "firstName"},
    {label: "Nom de famille", key: "lastName"},
    {label: "Date de naissance", key: "dob"},
    {label: "Sexe", key: "sexe"},
    {label: "Fumeur", key: "fumeur"},
    {label: "Dormez-vous seul(e) ?", key: "sleep_alone"},
    {label: "Profession", key: "job"},
    {label: "Ronflement", key: "ronflement"},
    {label: "Maux de tête le matin ?", key: "head_sick"},
    {label: "Pauses respiratoires la nuit", key: "breathe_break"},
    {label: "Urines/nuit", key: "pee_night"},
    {label: "Problèmes de concentration/ de mémoire la journée ?", key: "memory_issue"},
    {label: "Irritable la journée ?", key: "nervous_day"},
    {label: "Sommeil est réparateur ?", key: "sleep_well"},
    {label: "Somnolence au volant ?", key: "sleep_drive"},
    {label: "Accident lié à un endormissement au volant ?", key: "car_accident"},
    {label: "Échelle de fatigue de Pichot", key: "pichot"},
    {label: "Échelle HAD : Hospital Anxiety and Depression scale", key: "had"},
    {label: "Échelle de somnolence d'epworth", key: "epworth"},

  ];

  let newArray = [];

  for (let i = 0; i < arrayData.length; i++) {
    newArray.push(arrayData[i].firstname);
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


  function customersData() {

    const custs = [];
    for (let i = 0; i < arrayData.length; i++) {
      custs[i] = {
        firstName: `${arrayData[i].firstname}`,
        lastName: `${arrayData[i].lastname}`,
        dob: `${newArray[2]}`,
        sexe: `${newArray[3]}`,
        fumeur: `${newArray[4]}`,
        sleep_alone: `${newArray[5]}`,
        job: `${newArray[6]}`,
        ronflement: `${newArray[7]}`,
        head_sick: `${newArray[8]}`,
        breathe_break: `${newArray[9]}`,
        pee_night: `${newArray[10]}`,
        memory_issue: `${newArray[11]}`,
        nervous_day: `${newArray[12]}`,
        sleep_well: `${newArray[13]}`,
        sleep_drive: `${newArray[14]}`,
        car_accident: `${newArray[15]}`,
        pichot: `${newArray[16]}`,
        had: `Total A : ${newArray[17]} & Total D ${newArray[18]}: `,
        epworth: `${newArray[19]}`
      };
    }
    return custs;
  }

  let customers = customersData();


  const wscols = [
    {wch: Math.max(...customers.map(customer => customer.firstName.length))},
    {wch: Math.max(...customers.map(customer => customer.lastName.length))},
    {wch: Math.max(...customers.map(customer => customer.dob.length))},
    {wch: Math.max(...customers.map(customer => customer.sexe.length))},
    {
      wch: Math.max(...customers.map(customer => customer.sleep_alone.length)) + 3
    },
    {wch: Math.max(...customers.map(customer => customer.job.length))},
    {wch: Math.max(...customers.map(customer => customer.ronflement.length))},
    {wch: Math.max(...customers.map(customer => customer.head_sick.length))},
    {wch: Math.max(...customers.map(customer => customer.breathe_break.length))},
    {wch: Math.max(...customers.map(customer => customer.pee_night.length))},
    {wch: Math.max(...customers.map(customer => customer.memory_issue.length))},
    {wch: Math.max(...customers.map(customer => customer.nervous_day.length))},
    {wch: Math.max(...customers.map(customer => customer.sleep_well.length))},
    {wch: Math.max(...customers.map(customer => customer.sleep_drive.length))},
    {wch: Math.max(...customers.map(customer => customer.car_accident.length))},
    {wch: Math.max(...customers.map(customer => customer.pichot.length))},
    {wch: Math.max(...customers.map(customer => customer.had.length))},
    {wch: Math.max(...customers.map(customer => customer.epworth.length))}
  ];


  return (
    <div className="App">
      <Header className="header" topicTitle="Informations patient"/>
      <div className="row">
        <div className="col-md-8">
        </div>
        <div className="col-md-4 center">
          <ExportCSV
            csvData={customers}
            fileName="Customers_Infomation_xlsx"
            wscols={wscols}
          />
          <ExportReactCSV
            csvHeaders={headers}
            csvData={customersData()}
            fileName="Customers_Infomations_csv.csv"
          />
        </div>
      </div>
      <Customers customers={customers}/>
    </div>
  );
};


export default FormResults;

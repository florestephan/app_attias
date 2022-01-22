import React, {useState, useContext, useEffect} from 'react';
import {FirebaseContext} from '../Firebase';

import Header from "src/components/Header";
import Customers from "src/components/Customers";
import ExportCSV from "src/components/ExportCSV";
import ExportReactCSV from "src/components/ExportReactCSV";

const FormResults = () => {
  const firebase = useContext(FirebaseContext);
  const [data, setData] = useState({});


  useEffect(() => {
    firebase.data('forms').get()
      .then((doc) => {
        doc.forEach((doc) => {
          const myData = doc.data();
          setData(myData)
        })
      });
  }, [])

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

data.push

  function customersData() {


    const custs = [];
    for (let i = 0; i <= 0; i++) {
      custs[i] = {
        firstName: `${data.firstname}`,
        lastName: `${data.lastname}`,
        dob: `${data.dob}`,
        sexe: `${data.sexe}`,
        fumeur: `${data.fumeur}`,
        sleep_alone: `${data.sleep_alone}`,
        job: `${data.job}`,
        ronflement: `${data.ronflement}`,
        head_sick: `${data.head_sick}`,
        breathe_break: `${data.breathe_break}`,
        pee_night: `${data.pee_night}`,
        memory_issue: `${data.memory_issue}`,
        nervous_day: `${data.nervous_day}`,
        sleep_well: `${data.sleep_well}`,
        sleep_drive: `${data.sleep_drive}`,
        car_accident: `${data.car_accident}`,
        pichot: `${data.pichot}`,
        had: `Total A : ${data.hadA} & Total D ${data.hadD}: `,
        epworth: `${data.epworth}`
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

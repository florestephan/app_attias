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
    {label: "Fumeur", key: "fumeur"}
  ];


  function customersData() {
    const custs = [];
    for (let i = 0; i <= 2; i++) {
      custs[i] = {
        firstName: `${data.Prénom}`,
        lastName: `${data.nom_de_famille}`,
        email: `mail${i}@mail.com`,
        address: `#${i}, block name, floor #${i} street name, city name, state name`,
        postcode: `${i}0000`
      };
    }
    return custs;
  }

  let customers = customersData();

  const wscols = [
    {wch: Math.max(...customers.map(customer => customer.firstName.length))},
    {wch: Math.max(...customers.map(customer => customer.lastName.length))},
    {wch: Math.max(...customers.map(customer => customer.email.length))},
    {wch: Math.max(...customers.map(customer => customer.address.length))},
    {
      wch: Math.max(...customers.map(customer => customer.postcode.length)) + 3
    }
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

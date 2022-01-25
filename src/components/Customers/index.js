import React from "react";
import {useState, useEffect} from 'react';
import {Table} from "react-bootstrap";


// 3. create customers table component
const Index = ({customers}) => {

  console.log(customers)

  // table header
  const TableHeader = (
    <thead className="bgvi">
    <tr>
      <th>#</th>
      <th>Prénom</th>
      <th>Nom de famille</th>
      <th>Date de naissance</th>
      <th>Sexe</th>
      <th>Fumeur</th>
      <th>Dormez-vous seul(e) ?</th>
      <th>Profession</th>
      <th>Ronflement</th>
      <th>Maux de tête le matin ?</th>
      <th>Pauses respiratoires la nuit</th>
      <th>Urines/nuit</th>
      <th>Problèmes de concentration/ de mémoire la journée ?</th>
      <th>Irritable la journée ?</th>
      <th>Sommeil est réparateur ?</th>
      <th>Somnolence au volant ?</th>
      <th>Accident lié à un endormissement au volant ?</th>
      <th>Échelle de fatigue de Pichot</th>
      <th>Échelle HAD : Hospital Anxiety and Depression scale</th>
      <th>Échelle de somnolence d'epworth</th>
    </tr>
    </thead>
  );


  // table row construction
  const CustomerRow = (customer, index) => (
    <tr key={index} className="even">
      <td>{index + 1}</td>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.dob}</td>
      <td>{customer.sexe}</td>
      <td>{customer.fumeur}</td>
      <td>{customer.sleep_alone}</td>
      <td>{customer.job}</td>
      <td>{customer.ronflement}</td>
      <td>{customer.head_sick}</td>
      <td>{customer.breathe_break}</td>
      <td>{customer.pee_night}</td>
      <td>{customer.memory_issue}</td>
      <td>{customer.nervous_day}</td>
      <td>{customer.sleep_well}</td>
      <td>{customer.sleep_drive}</td>
      <td>{customer.car_accident}</td>
      <td>{customer.pichot}</td>
      <td>Total A : {customer.hadA} & Total D : {customer.hadD} </td>
      <td>{customer.epworth}</td>
    </tr>
  );

  // render customers's items
  const CustomerTable = customers.map((cust, index) =>
    CustomerRow(cust, index)
  );

  return (
    <Table striped bordered hover>
      {TableHeader}
      <tbody>{CustomerTable}</tbody>
    </Table>
  );
};

export default Index;

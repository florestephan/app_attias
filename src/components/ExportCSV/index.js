import React from "react";
import {Button} from "react-bootstrap";
import FileSaver from "file-saver";
import XLSX from "xlsx";

const Index = ({csvData, fileName, wscols}) => {
  // ******** XLSX with object key as header *************
  // const fileType =
  //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  // const fileExtension = ".xlsx";

  // const exportToCSV = (csvData, fileName) => {
  //   const ws = XLSX.utils.json_to_sheet(csvData);
  //   const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  //   const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  //   const data = new Blob([excelBuffer], { type: fileType });
  //   FileSaver.saveAs(data, fileName + fileExtension);
  // };

  // ******** XLSX with new header *************
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const Heading = [
    {
      firstName: `Prénom`,
      lastName: `Nom de famille`,
      dob: `Date de naissance`,
      sexe: `Sexe`,
      fumeur: `Fumeur`,
      sleep_alone: `Dormez-vous seul(e) ?`,
      job: `Profession`,
      ronflement: `Ronflement`,
      head_sick: `Maux de tête le matin ?`,
      breathe_break: `Pauses respiratoires la nuit`,
      pee_night: `Urines/nuit`,
      memory_issue: `Problèmes de concentration/ de mémoire la journée ?`,
      nervous_day: `Irritable la journée`,
      sleep_well: `Sommeil est réparateur ?`,
      sleep_drive: `Somnolence au volant ?`,
      car_accident: `Accident lié à un endormissement au volant ?`,
      pichot: `Échelle de fatigue de Pichot`,
      had: `Échelle HAD : Hospital Anxiety and Depression scale `,
      epworth: `Échelle de somnolence d'epworth`
    }
  ];

  const exportToCSV = (csvData, fileName, wscols) => {
    const ws = XLSX.utils.json_to_sheet(Heading, {
      header: ["Prénom", "Nom de famille", "Date de naissance", "Sexe", "Fumeur", "Dormez-vous seul(e) ?", "Profession", "Ronflement", "Maux de tête le matin ?", "Pauses respiratoires la nuit", "Urines/nuit", "Problèmes de concentration/ de mémoire la journée ?", "Irritable la journée ?", "Sommeil est réparateur ?", "Somnolence au volant ?", "Accident lié à un endormissement au volant ?", "Échelle de fatigue de Pichot", "Échelle HAD : Hospital Anxiety and Depression scale", "Échelle de somnolence d'epworth"],
      skipHeader: true,
      origin: 0 //ok
    });
    ws["!cols"] = wscols;
    XLSX.utils.sheet_add_json(ws, csvData, {
      header: ["Prénom", "Nom de famille", "Date de naissance", "Sexe", "Fumeur", "Dormez-vous seul(e) ?", "Profession", "Ronflement", "Maux de tête le matin ?", "Pauses respiratoires la nuit", "Urines/nuit", "Problèmes de concentration/ de mémoire la journée ?", "Irritable la journée ?", "Sommeil est réparateur ?", "Somnolence au volant ?", "Accident lié à un endormissement au volant ?", "Échelle de fatigue de Pichot", "Échelle HAD : Hospital Anxiety and Depression scale", "Échelle de somnolence d'epworth"],
      skipHeader: true,
      origin: -1 //ok
    });
    const wb = {Sheets: {data: ws}, SheetNames: ["data"]};
    const excelBuffer = XLSX.write(wb, {bookType: "xlsx", type: "array"});
    const data = new Blob([excelBuffer], {type: fileType});
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button
      variant="warning"
      onClick={e => exportToCSV(csvData, fileName, wscols)}
    >
      Export XLSX
    </Button>
  );
};

export default Index;

// This component is a presentational component which takes the data to download and file name as props. The exportToCSV method is invoked when the export button is clicked on line 20.

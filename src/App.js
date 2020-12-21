import React from 'react';
import './App.css';
import axios from "axios";
import PDFViewer from 'pdf-viewer-reactjs'
import { ReactComponent as KiteLogo } from './images/kite_logo.svg';

function App() {
  const generatePolly = () => {
    axios
      .post(`http://localhost:8080/polly`,
        {
          firstName: 'FirstName',
          lastName: 'LastName',
          level: "Your Student Mathematics score : level 4",
          performance: "Your student has scored 341 percentile.",
          school: "Your student's school Median percentile is 276. Total number of students in your students school is 103. Your student is out performed in  school level.",
          district: "Your student's district Median percentile is 276. Total number of students in your students school is 103. Your student is out performed in  district level.",
          state: "Your student's state Median percentile is 280. Total number of students in your students school is 36,140. Your student is out performed in  state level.",
        },
        {
          headers: { 'Content-Type': 'application/json' }
        })
      .then((res) => {
        console.log("Return Data ---->>>", res.data);
      })
      .catch((err) => {
        console.log("Error Data ---->>>", err);
      });
  }

  return (
    <div className="LoginBackground " >
      <div className="Login">
        <KiteLogo data-testid="logo-element" style={{ marginLeft: "120px" }} />
        <h1 style={{ marginLeft: "20px" }}>STUDENT REPORT GENERATION </h1> {/*This comes with logo. this line will go away*/}
        <h3 className="line" style={{ marginLeft: "20px" }}>Select the subject to view the report</h3>
        <ul style={{ marginLeft: "40px" }}>
          <li>
            <a id="content" href="http://172.17.0.126:3000/maths" onClick={generatePolly}>Specific REPORT TTS</a>
          </li>
          <li>
            <a id="content" href="http://172.17.0.126:3000/parentExample" >Generic REPORT TTS</a>
          </li>
        </ul>
      </div>
    </div>
  )
};
export default App;
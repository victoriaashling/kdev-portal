import React from 'react';
import { Link } from 'react-router-dom';

const leftSide = props =>(
  <div>
    <ul>
    <li><Link
      to="/patients/lab-result/BloodTest"
      onClick={() => props.handlePageChange("Blooddd")}
      className={
        props.currentPage === "Blood" ? "nav-link active" : "nav-link"
      }>Blood test</Link></li>

    <li><Link 
      to="/patients/lab-result/DrugTest" 
      onClick={() => props.handlePageChange("Druggg")}
      className={
        props.currentPage === "Drug" ? "nav-link active" : "nav-link"
      }>Drug test</Link></li>

    <li><Link 
      to="/patients/lab-result/XRayTest" 
      onClick={() => props.handlePageChange("XRayyy")}
      className={
        props.currentPage === "XRay" ? "nav-link active" : "nav-link"
      }>X-Ray test</Link></li>
    </ul>
  </div>
)



export default leftSide;


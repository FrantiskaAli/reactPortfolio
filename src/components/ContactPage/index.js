import React from 'react';
import Form from '../contactForm'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Link, Route, Routes } from 'react-router-dom';
/*const instagram =<FontAwesomeIcon icon="fa-brands fa-instagram" size = '10x'/>;
const phone = <FontAwesomeIcon icon="fa-regular fa-mobile" size = '10x'/>;
const gitHub = <FontAwesomeIcon icon="fa-brands fa-github" size = '10x'/>;
const linkedIn = <FontAwesomeIcon icon="fa-brands fa-linkedin" size = '10x'/>;
const CV = <FontAwesomeIcon icon="fa-solid fa-file-pdf" size = '10x'/>;*/


function contactPage(){

    return <>
    <button className="btnF"><a href="#" target="_blank"><i className="fa fa-file fa-3x">CV</i></a></button>
    <button className="btnF"><a href="mailto:tiskarechk@gmail.com"><i className="fa fa-at fa-3x"></i></a></button>
    <button className="btnF"><a href="https://github.com/FrantiskaAli" target="_blank"><i className="fa fa-github fa-3x"></i></a></button>
    <button className="btnF"><a href="https://www.linkedin.com/in/frantiska-rechkova-94623925b/" target="_blank"><i className="fa fa-linkedin fa-3x"></i></a></button>
    <button className="btnF"><a href="#"><i className="fa fa-mobile fa-3x"></i></a></button>
    <Link to="form" role="button" className="btn btn-link">
    <i className="fa fa-at">Message me</i>
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="form" element={<Form />} />
      </Routes>
    </>
}


export default contactPage;
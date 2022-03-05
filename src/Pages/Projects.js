import '../App.css';

import React, { useState, Component } from 'react';
import Github from '../Icons/GitHub-logo.png';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
const Projects = () => {



    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <h3>Repo of Projects: </h3>
            <a href="https://github.com/CoryHolenstein"><Button variant="secondary" size="lg">
              
                <img src={Github} width="100" height="60" alt="github icon png background" />
            </Button></a>
            <h2>Specific project links</h2>
            <div className="left-col">
                <NavLink to="/MorningStar">MorningStar Dance</NavLink><br></br>
                <NavLink to="/GoogleBooksAPI">Google Books API</NavLink><br></br>
                <NavLink to="/CarInventory">Car Inventory</NavLink><br></br>

            </div>
            <div className="center-col"> </div>
            <div className="right-col"> </div>



        </div>





    );

}
export default Projects;
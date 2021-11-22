import '../App.css';

import React, { useState, Component } from 'react';
import Github from '../Icons/GitHub-logo.png';
import Button from 'react-bootstrap/Button';

const Projects = () => {



    return (
        <div className="projects-page">
            <h1>Projects</h1>
            <h3>Repo of Projects: </h3>
            <a href="https://github.com/CoryHolenstein"><Button variant="secondary" size="lg">
              
                <img src={Github} width="100" height="60" alt="github icon png background" />
            </Button></a>
            <div className="left-col"> </div>
            <div className="center-col"> Links to specific projects coming soon...</div>
            <div className="right-col"> </div>



        </div>





    );

}
export default Projects;
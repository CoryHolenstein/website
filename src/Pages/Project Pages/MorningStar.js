import '../../App.css';

import React, { useState, Component } from 'react';
import oldsite from '../../Photos/old_site.png';
import { NavLink } from 'react-router-dom';

const MorningStar = () => {




    return (
       
            <div className="specific-projects">
            <h1> MorningStar Dance</h1>
            <h3> School project </h3>

                <p>This project was outdated and their website was not very functional. It lacked simple things like mobile compatability and a modern design. </p>
            <p>I was the sole developer for this entire project, and my goal was to make a clean, simple and functional website to replace their outdated one. </p>

            <p>Here's an image of their old website -</p> 
            <img src={oldsite} height="325" width="325" alt="old morningstar dance website" />

            <p>Here's a link to my live project of the website:  <a href="https://capstone-morningstar-65bcc.web.app/Home"> MorningStar Dance Project </a></p>
            <NavLink to="/">Back to Portfolio home page</NavLink>
           
              </div>
      






    );





}
export default MorningStar;
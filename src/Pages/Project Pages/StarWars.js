import '../../App.css';

import React, { useState, Component } from 'react';
import oldsite from '../../Photos/old_site.png';
import { NavLink } from 'react-router-dom';

const StarWars = () => {




    return (

        <div className="specific-projects">
            <h1> Star Wars</h1>
            <h3> Personal project </h3>

            <p>Project uses: React for the client and Asp.net 6 for the API calls.</p>
            <p>This project was made to learn new technology and improve my knowledge with React and Asp.net</p>
             <p>   It works by using Axios to send the call to a local Asp.net server.</p>
            <p>The Asp.net server then sends the request to https://swapi.dev/ which is an open source API.</p>
            <p> I was the sole developer of this project and learned a lot through this project. </p>
            <p> The project is not live but you can view both the client and server code through these github links: </p>
            <p> <a href="https://github.com/CoryHolenstein/StarWarsReactAspProject">Client</a></p>
        
          
         

            <NavLink to="/">Back to Portfolio home page</NavLink>

        </div>







    );





}
export default StarWars;
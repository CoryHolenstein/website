import '../../App.css';

import React, { useState, Component } from 'react';
import oldsite from '../../Photos/old_site.png';
import { NavLink } from 'react-router-dom';

const CarInventory = () => {




    return (

        <div className="specific-projects">
            <h1> Car Inventory</h1>
            <h3> Personal project </h3>

            <p>Project uses: C# for the client. Node.JS for the API. mySQL for the database.</p>
            <p>This project was simply to help me learn C#. The application features a simple login. Then the user can add/delete cars to the database. </p>
            <p> I was the sole developer of this project and learned a lot through this project. </p>
            <p> The project is not live but you can view both the client and server code through these github links: </p>
            <p> <a href="https://github.com/CoryHolenstein/sharp-front-end2">Client</a></p>
            <p> <a href="https://github.com/CoryHolenstein/sharp-middle-end2">Server</a></p>
          
         

            <NavLink to="/">Back to Portfolio home page</NavLink>

        </div>







    );





}
export default CarInventory;
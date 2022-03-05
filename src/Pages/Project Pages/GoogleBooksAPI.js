import '../../App.css';

import React, { useState, Component } from 'react';
import oldsite from '../../Photos/old_site.png';
import { NavLink } from 'react-router-dom';

const GoogleBooksAPI = () => {




    return (

        <div className="specific-projects">
            <h1> Google Books API</h1>
            <h3> School project </h3>

            <p> This project was assigned in Advanced Web Applications. I cut features while porting it to this website, but intend on readding them.  </p>
            <p>I was the sole developer for this entire project. My main goal of this project was to learn how to effectively send and receive JSON, which was a success. </p>
            <p>Here's a link to my live project of the website:  <a href="https://cholensteinbooks.firebaseapp.com/" > Google Books API</a></p>
            
            <NavLink to="/">Back to Portfolio home page</NavLink>

        </div>







    );





}
export default GoogleBooksAPI;
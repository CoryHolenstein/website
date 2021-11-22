import '../App.css';

import React, { useState, Component } from 'react';

import Jax from '../Photos/Jax.png';
import Cory from '../Photos/Cory.png';

const About = () => {




    return (
        <div className="about-page">
            <h1> Portfolio</h1>
            <h3>Hey there!</h3>
            <p>My name is Cory Holenstein, I graduate(d) from KSU on December 14th, 2021.</p>
            <img src={Cory} width="100" height="100"/>

            <p>I have my Associate degree in Applied Computer Sciences and my Bachelor degree in Information Technology,
                with a concentration in mobile development.</p>

            <p>Currently employed at Retail Data Systems in Acworth, GA.,
                but I am pursuing other opportunities which will expand my knowledge with software.</p>

         
            <p>My hobbies include programming (React, Node, Java, Spring), gaming (Battlefield, Warcraft, Squad), working out, and of course, playing with my cat!</p>
            <img src={Jax} width="100" height="100" />

        </div>






    );





}
export default About;
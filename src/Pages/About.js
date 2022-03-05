import '../App.css';

import React, { useState, Component } from 'react';

import Jax from '../Photos/Jax.png';
import Cory from '../Photos/Cory.png';

const About = () => {




    return (
        <div className="about-page">
            <h1> Portfolio</h1>
            <h3>Hey there!</h3>
            <p>My name is Cory Holenstein, I graduated from KSU on December 14th, 2021.</p>
            <img src={Cory} width="100" height="100"/>

            <p>Obtained Associate degree in Applied Computer Sciences and Bachelor degree in Information Technology,
                with a concentration in mobile development.</p>

            <p>I am currently an Intern at EQ Games for Game Development with Unreal Engine 4, which involves C++ and engine blueprints.</p>
               <p>  Open to pursuing other opportunities which will expand my knowledge with software.</p>

         
            <p>My hobbies include programming (React, Node, Java, Spring), gaming (Battlefield, Warcraft, Squad), working out, and of course, playing with my cat!</p>
            <img src={Jax} width="100" height="100" />

        </div>






    );





}
export default About;
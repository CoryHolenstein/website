
import '../App.css';
import React, { useState, Component, useEffect, createContext, useContext } from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';
import NavigationBar from '../GlobalHooks/NavigationBar'

const Main = () => {



    useEffect(() => {
        document.title = "Cory's Website"
    }, []);



    return (


        <div className="App">
         
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
 
}
export default Main;

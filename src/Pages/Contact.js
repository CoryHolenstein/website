import '../App.css';

import React, { useState, Component, useRef } from 'react';

import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Button from 'react-bootstrap/Button';
import LinkedIn from '../Icons/Linkedin-logo3.png';


const Contact = () => {

    const [emailResponse, setEmailResponse] = useState("");


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

   

        emailjs.sendForm('service_portfolio_site', 'template_portfolio', form.current, 'user_g4oYOtObrTqkhRVkjkxKh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setEmailResponse("Email sent!");
        e.target.reset();
    }


    return (
        <div className="contact-page">
            <h1> Contact me</h1>

            <form ref={form} onSubmit={sendEmail} >
                <label>Name: </label>
                <input type="text"  name="name" /> <br></br>
                <label>Email: </label>
                <input type="email" name="email" /> <br></br>
                <label>Message: </label>
                <textarea name="message" rows="2" cols="20" />  <br></br>
                <input type="submit" value="Send" /> <br></br>
            </form>
            <p>{emailResponse}</p>
          
            <h1> Connect</h1>
            <a href="https://www.linkedin.com/in/cory-holenstein" title="linkedin image">
                <Button variant="primary" size="lg">
                   
                    <img src={LinkedIn} width="100" height="50" alt="linkedin icon png background" />
                </Button></a>
        
         

        </div>






    );





}
export default Contact;
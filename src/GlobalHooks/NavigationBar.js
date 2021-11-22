import React, { Component } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.css'


const NavigationBar = () => {







    return (



        <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark"  >

                        <Navbar.Brand href="/Home">Navigation</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >

                                <NavLink className="NavBarLinks" to="/Home">Home</NavLink>
                                <NavLink className="NavBarLinks" to="/About">About</NavLink>
                            </Nav>

                        </Navbar.Collapse>
                    </nav>
                </Container>
            </Navbar>

        </div>





    );








}
export default NavigationBar;
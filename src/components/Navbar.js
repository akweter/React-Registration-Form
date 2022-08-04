import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default class Navbars extends Component{

    render(){

      const styling ={
        navbar: {
          marginBottom: '10px',
          minHeight: '100px',
        },
        nav: {
          fontSize: '23px',
          maxHeight: '100px',
          fontWeight: 'bolder',
          color: 'white'
        }        
      }

        return(
          <Navbar bg="primary" style={styling.navbar} sticky="top">
            <Container fluid>
              <Navbar.Brand href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9x93QN1NF9OsFTvgHIBLd7KUM1B8fkVTwpA&usqp=CAU" width="45" alt="Persol-Gh-Logo"/></Navbar.Brand>
              <Navbar.Toggle/>
              <Navbar.Collapse>
                <Nav className="mr-auto my-2 my-lg-0" style={styling.nav} navbarScroll>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/form">Form</Nav.Link>
                  <Nav.Link href="/admin">Admin</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}

//https://www.ghanayello.com/img/gh/s/1453119388-67-persol-systems-ltd.jpg

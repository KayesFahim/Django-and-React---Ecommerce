import React from 'react'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>AzaBazar</Navbar.Brand>
                </LinkContainer>               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="basic-navbar-nav">
                    <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavDropdown.Item href="action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                    <Navbar.Collapse className="justify-content-right">
                        <LinkContainer to='/login'>
                            <Nav.Link>login</Nav.Link>   
                        </LinkContainer>
                        <LinkContainer to='/cart'>
                            <Nav.Link><i className="fas fa-shopping-cart"></i> cart</Nav.Link>
                        </LinkContainer>                      
                    </Navbar.Collapse>
                     </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header

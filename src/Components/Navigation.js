import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../../src/App.css'

export default function Navigation() {
    return (        
        <Navbar expand="md">
            <Navbar.Brand href="/">ToDos</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav className="mr-auto">
                        <Nav.Link href="/Login">Login</Nav.Link>
                        <Nav.Link href="/ToDos">ToDos</Nav.Link>
                        <Nav.Link href="/Categories">Categories</Nav.Link>
                        <Nav.Link href="/Bootstrap">Bootstrap</Nav.Link>
                    </Nav>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

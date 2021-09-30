import {React} from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../../src/App.css";
import { useAuth } from "../contexts/AuthContext";


export default function Navigation() {
  const { currentUser, logout } = useAuth();
  function handleAuth() {
    logout();
    window.location.href = "/login/";
  }  
  return (
    <Navbar fixed="top" expand="md">
      <Navbar.Brand href="/">
          ToDos
          {currentUser && (
              <span className="profiles p-2">
           <img src={currentUser.photoURL} alt={currentUser.displayName} /> 
           </span>
          )}
          {currentUser && (
              <span className="profiles p-0">
           Welcome: {currentUser.displayName}
           </span>
          )}
          </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Nav className="mr-auto">
            <Nav.Link href="/ToDos">ToDos</Nav.Link>
            <Nav.Link href="/Categories">Categories</Nav.Link>
            <Nav.Link href="/Bootstrap">Bootstrap</Nav.Link>
            {!currentUser && <Nav.Link href="/Login">Login</Nav.Link>}
            {currentUser && (
              <Nav.Link onClick={() => handleAuth()}>Logout</Nav.Link>
            )}
          </Nav>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

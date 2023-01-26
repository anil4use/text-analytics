import React from 'react'
import { Navbar, Container, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header(props) {
  return (
    <Navbar className={`bg-${props.Mode}`}>
      <Container >
        <Navbar.Brand to="/"  className={`cursor-pointer text-${props.Mode === 'light' ? 'dark' : 'light'}`} > <Link className="nav-link active" aria-current="page" to="/">Text APP</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className={`form-check me-auto form-switch text-${props.Mode === 'light' ? 'dark' : 'light'}`} > */}
          <ul className={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
        <li className={`nav-itme `}>
          <Link className={`nav-link active text-${props.Mode === 'light' ? 'dark' : 'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.Mode === 'light' ? 'dark' : 'light'}`}  aria-current="page" to="/about">About</Link>
        </li>
      </ul>
          <div className={`form-check form-switch text-${props.Mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.Mode === 'light' ? 'dark' : 'light'} mode</label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header


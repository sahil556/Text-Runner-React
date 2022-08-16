import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  let color = props.mode === 'dark' ? props.mode : props.mode2;
   
  return (
    <nav className={`navbar navbar-expand-lg navbar-${color} bg-${color}`}>
    <div className="container-fluid">
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link active" to="/about">{props.aboutText}</Link>
          </li> */}
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${color === 'light' ? 'dark' : 'light'} `}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'}mode</label>
</div> &nbsp;&nbsp;
 <div className={`form-check form-switch text-${color === 'light' ? 'dark' : 'light'} `}>
  <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="switch2"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode2 === 'light' ? 'Green' : 'Light'}mode</label>
</div>
      </div>
    </div>
  </nav>
  )
}
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "set title here",
    aboutText : "set about"
}
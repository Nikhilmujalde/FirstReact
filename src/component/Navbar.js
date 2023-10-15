import React from 'react';
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      {/* writing the class in js  */}
      {/* navbar-dark se text light mode me ho jata hai bg se bg color dark ho jata hai */}
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            {props.title}
          </Link> */}
          <a className="navbar-brand" href="/#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* agar a ki jagah Link or href ki placeme to ue karenge to kam to karega par page reload
                hone lag jayega  */}
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  {props.AboutText}
                </a>
              </li>


            </ul>
            <div className="d-flex">
              <div className="bg-primary rounded mx-2 " onClick={() => { props.toggleMode('primary') }}
                style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
              <div className="bg-danger rounded mx-2 " onClick={() => { props.toggleMode('danger') }}
                style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
              <div className="bg-secondary rounded mx-2 " onClick={() => { props.toggleMode('secondary') }}
                style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
              <div className="bg-warning rounded mx-2 " onClick={() => { props.toggleMode('warning') }}
                style={{ height: '25px', width: '25px', cursor: 'pointer' }}></div>
            </div>
            <div className={`form-check form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


// it is used to ensure typechecking if we use isRequired then we have to give some value to it
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string
};


// this are the default values which will be displayed if you do not pass anything
Navbar.defaultProps = {
  title: 'Set title ',
  AboutText: 'Write About'
};
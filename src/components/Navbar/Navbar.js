import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <section className="navbarSection">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link className="navbar-brand" to='/'>
              <img height="60px" width="284px" src="media/logo.svg" alt="KANGAROO VENTURES" />
            </Link>
            <input type="checkbox" id="menu" />
              <label htmlFor="menu" className="icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasID">
                <div className="menu"></div>
              </label>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                  <li className="nav-item">
                    <Link className="nav-link barlow fontSize17 fontWeight400 lineHeight141 mx-2" to='/'>About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link barlow fontSize17 fontWeight400 lineHeight141 mx-2" to='/'>Plans & Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link barlow fontSize17 fontWeight400 lineHeight141 mx-2" to='/'>Co-working</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link barlow fontSize17 fontWeight400 lineHeight141 mx-2" to='/'>Contact</Link>
                  </li>
                  <li className="nav-item">
                    <button className="navBtn barlow fontSize16 fontWeight700 lineHeight150 ms-2">
                      Get Started
                    </button>
                  </li>
                </ul>
              </div>
          </div>
          <div className="offcanvas offcanvas-end" id="offcanvasID" data-bs-backdrop="false">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center align-items-center">
              <li className="nav-item">
                <Link className="nav-link barlow fontSize17 fontWeight400 lineHeight141 mx-2" to='/'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link barlow fontSize17 fontWeight400 lineHeight141 mx-2" to='/'>Plans & Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link barlow fontSize17 fontWeight400 lineHeight141 mx-2" to='/'>Co-working</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link barlow fontSize17 fontWeight400 lineHeight141 mx-2" to='/'>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  )
}

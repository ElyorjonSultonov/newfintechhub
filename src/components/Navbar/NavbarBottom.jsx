import React from 'react'
import { Link } from 'react-router-dom'
import './NavbarBottom.scss'

function NavbarBottom() {
  return (
    <div className="NavbarBottom">
      <div className="container">
        <div className="NavLinks">
          <ul className="menu-7 menu">
            <li>Bosh sahifa</li>
            <li>Biz haqimizda</li>
            <Link to="/course">
              <li>Kurslarimiz</li>
            </Link>
            <li>Ustozlar</li>
            <li>Hamkorlar</li>
            <li>Kontaktlar</li>
          </ul>
        </div>
        <div className="NavEnd">
          <div className="Search">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                fill="black"
              />
              <path
                d="M22 22.75C21.81 22.75 21.62 22.68 21.47 22.53L19.47 20.53C19.18 20.24 19.18 19.76 19.47 19.47C19.76 19.18 20.24 19.18 20.53 19.47L22.53 21.47C22.82 21.76 22.82 22.24 22.53 22.53C22.38 22.68 22.19 22.75 22 22.75Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="SignUp">
            <button className="btn">Bepul Registratsiya</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarBottom

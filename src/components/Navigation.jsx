import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.svg";


export default function Navigation(){
    return (
 <section className="navigation">
    <nav className="nav container">
          <Link to="/home" className="links__description">
          <img src={logo} className="logo-image" loading="lazy" alt="gallery title logo " />
          </Link>
            <Link to="/consultation" className="button__consultation">
          <button  className="btn btn--primary">
           Free Consultation
          </button>
          </Link>
      </nav>
  </section>

  );
}
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Buttons";

import logo from "../assets/images/logo.svg";


export default function Navigation(){
    return (
 <section className="navigation ">
    <nav className="nav container">
          <Link to="/home" className="links__description">
          <img src={logo} className="logo-image" loading="lazy" alt="gallery title logo " />
          </Link>
            <Link to="/consultation" className="button__consultation">
          <Button variant="secondary text-present-5">
           Free Consultation
          </Button>
          </Link>
      </nav>
  </section>

  );
}
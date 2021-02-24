import logo from "../logoBaustack.png";
// import React from "react";

export default function Footer() {
  return (
    <footer className="container border-top">
      <div className="row mx-auto pt-4">
        <div className="col-md-4">
          <img
            src={logo}
            className="img-fluid rounded w-auto"
            alt="img-header"
          ></img>
          <p className="text-start pt-2">
            Crea tus propias aplicaciones en la nube de forma autónoma, sin la
            necesidad de conocimientos técnicos.
          </p>
        </div>
        <div className="col-md-4">
          <h4>Links importantes</h4>
          <p className="text-start pt-2">
            Templates.<br></br>
            Pricing<br></br>
            FAQ<br></br>
            Términos de uso<br></br>
            Política de privacidad<br></br>
          </p>
        </div>
        <div className="col-md-4">
          <h4>Síguenos en:</h4>
          <ul className="list-unstyled d-flex justify-content-evenly pt-2">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

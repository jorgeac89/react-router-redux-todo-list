import React from 'react';

const BottomBar = () => (
  <div className="container-fluid bg-dark text-light mt-5">
    <div className="row py-2">
      <div className="col-12 d-flex flex-column flex-md-row justify-content-center text-center text-nowrap">
        <div>
          <span className="mx-3">Jorge Antón Caballero</span>
          <a href="mailto:jorgeac89@gmail.com" className="text-reset text-decoration-none mx-3">
            <i className="fas fa-envelope" />
            &nbsp;
            jorgeac89@gmail.com
          </a>
        </div>
        <div className="mt-2 mt-md-0">
          <a href="https://github.com/jorgeac89/" className="text-reset text-decoration-none mx-3">
            <i className="fab fa-github" />
            &nbsp;
            Github
          </a>
          <a href="https://www.linkedin.com/in/jorge-anton-caballero" className="text-reset text-decoration-none mx-3">
            <i className="fab fa-linkedin-in" />
            &nbsp;
            Linkedin
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default BottomBar;

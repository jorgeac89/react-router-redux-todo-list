import React from 'react';
import { assetsUrl } from 'config';

const Header = () => (
  <div className="container-fluid bg-dark text-light mb-4">
    <div className="row align-items-center justify-content-around text-center">
      <div className="col-lg-6 text-lg-left">
        <h1 className="font-weight-light">React Router Redux Todo List</h1>
        <p className="lead">
          <span>Example of a web application developed with&nbsp;</span>
          <strong>React</strong>
          <span>,&nbsp;</span>
          <strong>React Router</strong>
          <span>&nbsp;and&nbsp;</span>
          <strong>Redux</strong>
          <span>.</span>
        </p>
      </div>
      <div className="col-lg-4 text-lg-right">
        <img
          alt="logo"
          src={`${assetsUrl}/images/logo.webp`}
          className="img-fluid mb-3 my-lg-3"
        />
      </div>
    </div>
  </div>
);

export default Header;

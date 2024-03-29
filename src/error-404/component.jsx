import React from 'react';

const Error404 = () => (
  <div className="d-flex flex-column justify-content-center text-center text-dark h-100">
    <h2 className="display-2">404</h2>
    <div className="display-3">
      <i className="fas fa-dragon mx-3" />
      <i className="fas fa-cat mx-3" />
      <i className="fas fa-pastafarianism mx-3" />
    </div>
    <h3 className="font-weight-light mt-3">
      We have found these mythical creatures, but not the page you are looking
      for.
    </h3>
  </div>
);

export default Error404;

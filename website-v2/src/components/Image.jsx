import React from 'react';

export default ({ id, className, src, alt }) => (
  <div className="image-wrapper">
    <img
      id={ id }
      className={ className }
      src={ src }
      alt={ alt } />
  </div>
);
import React from 'react';

export default ({ id, className, imgId, imgClassName, src, alt }) => (
  <div id={ id } className={`image-wrapper ${className || ''}`}>
    <img
      id={ imgId }
      className={ imgClassName }
      src={ src }
      alt={ alt } />
  </div>
);
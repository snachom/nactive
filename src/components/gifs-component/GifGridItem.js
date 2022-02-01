import React from 'react';
import PropTypes from 'prop-types';

import './gif-grid-item.css'

export const GifGridItem = ( {id, title, url} ) => {

  return (
      <>
        <div className="gif-card animate__animated animate__fadeIn">
          <img src={url} alt={title} />
          <p> {title}</p>
        </div>
      </>
    );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
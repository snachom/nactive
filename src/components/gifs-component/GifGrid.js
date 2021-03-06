import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

import './gif-grid.css'

export const GifGrid = ({ category }) => {

  const  { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h3 className="search-name animate__animated animate__fadeIn"> { category } </h3>

      { loading && <p className="loader animate__animated animate__flash">Loading...</p> }

      <div className='gif-card-grid'>
          {
            images.map( img => (
              <GifGridItem
                key={img.id}
                { ...img }
              />
            ))
          }
      </div>
    </>
  )
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
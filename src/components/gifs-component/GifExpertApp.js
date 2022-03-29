import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

import './gif-expert.css'

// export const GifExpertApp = ({ defaultCategories = ['Charlie Brown'] }) => {
export const GifExpertApp = ({ defaultCategories = ['Charlie Brown'] }) => {

  // const [categories, setCategories] = useState([ 'Charlie Brown' ]);
  const [categories, setCategories] = useState(defaultCategories);

  return ( 

    <div className="gif-app-wrapper">
      <div className="title-wrapper">
        <h2 className="app-title"> Giff App </h2>
        <hr />
      </div>
      <AddCategory setCategories={ setCategories } />

      <ul>
        { 
          categories.map( category => 
            <GifGrid 
              key={ category }
              category={ category } 
            />
          )
        }
      </ul>
    </div>
  )
};

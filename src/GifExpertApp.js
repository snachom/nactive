import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

import './gif-expert.css'

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Charlie Brown' ]);

  return ( 
    <>
      <div className="title-wrapper">
        <h2 className="app-title"> Giff App </h2>
        <hr />
      </div>
      <AddCategory setCategories={ setCategories } />

      <ol>
        { 
          categories.map( category => 
            <GifGrid 
              key={ category }
              category={ category } 
            />
          )
        }
      </ol>
    </>
  )
};

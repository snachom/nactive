import React from 'react';
import { Link } from 'react-router-dom';

export const SmashCharacters = ({
  id,
  name,
  console
}) => {
  return (
    <>
      <div className="img-wrapper">
        <div className="clip-wrapper"></div>
        <Link to={`/smash/${id}`} ><img className="smash-img" src={`/assets/smash/${id}.png`} alt={ name } /></Link>
      </div>
    </>
  )
};

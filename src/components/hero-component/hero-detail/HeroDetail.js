import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../../helpers/getHeroById';

export const HeroDetail = () => {

  const { heroId } = useParams()
  const hero = useMemo( () => getHeroById(heroId), [heroId] )
  const { superhero, publisher, alter_ego, first_appearance } = hero
  const imagePath = `/nactive/assets/${heroId}.jpg`
  const navigate = useNavigate()

  if(!hero) {
    return <Navigate to="/" />
  }

  const handleReturn = () => {
    navigate(-1)
  }

  return (
    <div className="hero-detail-container">
      <div className="app-container-detail container">
        <div className="container card-info animate__animated animate__fadeInLeft">
          <div className="row card-row-detail">
            <div className="col-4 card-head-wrapper">
              <div className="card-head">
                <img 
                  className="img img-fluid" 
                  src={ imagePath } 
                  alt={superhero}/>
              </div>
            </div>
            <div className="col-8">
              <div className="card-body card-body-detail">
                <h3>{superhero}</h3>
                <hr/>
                <ul className="list-group">
                  <li className="list-group-item hero-detail-text"><p className="hero-text">Alter Ego:</p><p className="hero-text-res">{alter_ego}</p></li>
                  <li className="list-group-item hero-detail-text"><p className="hero-text">Publisher:</p><p className="hero-text-res">{publisher}</p></li>
                  <li className="list-group-item hero-detail-text"><p className="hero-text">First Appearance:</p><p className="hero-text-res">{first_appearance}</p></li>
                </ul>
                <hr/>
                <button 
                  className="btn btn-outline-dark"
                  onClick={ handleReturn }
                >Regresar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

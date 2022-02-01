import { Link } from 'react-router-dom';
import './hero-card.css';

export const HeroCard = ({ 
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  const imagePath = `/assets/${id}.jpg`;
  return (
    <div className="col-md-4 col-12 card-cols animate__animated animate__fadeIn">
      <div className="hero-card">
        <div className="row no-gutters">
          <div className="col-4 card-head-wrapper">
            <div className="card-head">
              <img 
                src={ imagePath } 
                className="card-img" 
                alt={ superhero } 
              />
            </div>
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {/* {
                ( alter_ego !== characters ) 
                  && <p className="text-muted">{alter_ego}</p>
              } */}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/hero-detail/${id}`}>
                <button className="btn btn-outline-dark">More info</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

import { smashCharacters } from "../../data/smashCharacters";
import './smash.css'

export const Smash = ({ 
  id,
  name,
  console
}) => {
  return (
    <>
      <div className="container app-container">
        {/* <p>Smash Heroes</p> */}
        <div className="characters-wrapper">
        {
          smashCharacters.map( smashCharacter => (
            <div className="img-wrapper" key={smashCharacter.id}>
              <img className="smash-img" src={`/assets/smash/${smashCharacter.id}.png`} alt={ name } />
            </div>
          ))
        }
        </div>
      </div>
    </>
  )
};

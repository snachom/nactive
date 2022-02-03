import { smashCharacters } from "../../data/smashCharacters";
import { SmashCharacters } from "./SmashCharacters";
import './smash.css'

export const Smash = ({ 
  id,
}) => {
  return (
    <>
      <div className="container app-container">
        <div className="smash-logo-container">
          <div className="smash-img-wrapper">
            <img className="smash-logo" src="/assets/smash/sbb_logo.png" alt='smash-logo'/>
          </div>
        </div>
        <div className="characters-wrapper">
        {
          smashCharacters.map( smashCharacter => (
            <SmashCharacters
              key={ smashCharacter.id }
              {...smashCharacter}
            />
          ))
        }
        </div>
      </div>
    </>
  )
};

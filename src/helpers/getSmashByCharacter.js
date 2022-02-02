import { smashCharacters } from "../data/smashCharacters"

export const getSmashByCharacter = ( name = "" ) => {

  return smashCharacters.find(smashCharacter => smashCharacter.name === name);

  
}
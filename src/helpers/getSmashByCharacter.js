import { smashCharacters } from "../data/smashCharacters"

export const getSmashByCharacter = ( console = "" ) => {

  return smashCharacters.filter(smashCharacter => smashCharacter.console === console);

  
}
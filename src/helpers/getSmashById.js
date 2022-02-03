import { smashCharacters } from "../data/smashCharacters";

export const getSmashById = ( id = '' ) => {
  return smashCharacters.find(smash => smash.id === id);
}

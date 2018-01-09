import { Character } from "./character.model";

export interface Hero {
  id?: number;
  character: Character;
  powers: number[];
}

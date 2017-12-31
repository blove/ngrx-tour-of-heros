import { Power } from "./power.model";

export interface Hero {
  id: number;
  characterId: number;
  name: string;
  powers: Power[];
}

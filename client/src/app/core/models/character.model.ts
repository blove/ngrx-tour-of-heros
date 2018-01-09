import { CharacterUrl } from "./character-url.model";
import { CharacterImage } from "./character-image.model";

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  urls: CharacterUrl[];
  thumbnail: CharacterImage;
}

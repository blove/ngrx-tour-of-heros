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

export const generateCharacter = function(): Character {
  return {
    "id": 1009610,
    "name": "Spider-Man",
    "description": "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
    "modified": "2016-09-28T12:21:24-0400",
    "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
      "extension": "jpg"
    },
    "urls": [
      {
        "type": "detail",
        "url": "http://marvel.com/characters/54/spider-man?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
      },
      {
        "type": "wiki",
        "url": "http://marvel.com/universe/Spider-Man_(Peter_Parker)?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
      },
      {
        "type": "comiclink",
        "url": "http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
      }
    ]
  };
};

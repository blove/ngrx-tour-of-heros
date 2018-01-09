import { Character } from "./character.model";

export interface Hero {
  id?: number;
  character: Character;
  powers: number[];
}

export const generateHeroes = function(): Hero[] {
  return [
    {
      "id": 1,
      "powers": [
        1,
        2,
        3
      ],
      "character": {
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
      }
    },
    {
      "id": 2,
      "powers": [
        1,
        4,
        5,
        6
      ],
      "character": {
        "id": 1010338,
        "name": "Captain Marvel (Carol Danvers)",
        "description": "",
        "modified": "2016-09-28T12:21:24-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a",
          "extension": "jpg"
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/9/captain_marvel?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Ms._Marvel_(Carol_Danvers)?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1010338/captain_marvel_carol_danvers?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          }
        ]
      }
    },
    {
      "id": 3,
      "powers": [
        1
      ],
      "character": {
        "id": 1009351,
        "name": "Hulk",
        "description": "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.",
        "modified": "2014-06-10T16:12:58-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0",
          "extension": "jpg"
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/25/hulk?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Hulk_(Bruce_Banner)?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          }
        ]
      }
    },
    {
      "id": 4,
      "powers": [
        1,
        7,
        8
      ],
      "character": {
        "id": 1009664,
        "name": "Thor",
        "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        "modified": "2016-01-05T12:33:20-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
          "extension": "jpg"
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          }
        ]
      }
    },
    {
      "id": 5,
      "powers": [],
      "character": {
        "id": 1009368,
        "name": "Iron Man",
        "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
        "modified": "2016-09-28T12:08:19-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
          "extension": "jpg"
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/29/iron_man?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Iron_Man_(Anthony_Stark)?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=e412b613dc219df8468f501f5524c190"
          }
        ]
      }
    }
  ];
};

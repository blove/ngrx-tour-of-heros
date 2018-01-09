export interface Power {
  id?: number;
  name: string;
}

export const generatePowers = function(): Power[] {
  return [
    {
      "name": "strength",
      "id": 1
    },
    {
      "id": 2,
      "name": "cling"
    },
    {
      "id": 3,
      "name": "agility"
    },
    {
      "id": 4,
      "name": "flight"
    },
    {
      "id": 5,
      "name": "durability"
    },
    {
      "id": 6,
      "name": "energy"
    },
    {
      "id": 7,
      "name": "endurance"
    },
    {
      "id": 8,
      "name": "resistance"
    }
  ];
};

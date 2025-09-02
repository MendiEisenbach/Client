export type Player = {
  name: string;
  lowestTime: number;
};

export const players: Player[] = [
  { name: "Alice", lowestTime: 45 },
  { name: "Bob", lowestTime: 60 },
  { name: "Charlie", lowestTime: 30 },
  { name: "David", lowestTime: 55 },
];

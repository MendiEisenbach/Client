export interface Riddle {
  id: number;
  name: string;
  taskDescription: string;
  correctAnswer: string;
}

export const riddles: Riddle[] = [
  {
    id: 1,
    name: "Riddle 1",
    taskDescription: "How many members are there in the Israeli Knesset",
    correctAnswer: "120",
  },
  {
    id: 2,
    name: "Riddle 2",
    taskDescription: "We study on the floor whose number is it",
    correctAnswer: "28",
  },
];

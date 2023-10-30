let points = [];
const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

for (let i in players) {
  points.push(players[i].scorePoints);
}
console.log(points);

let biggestScore = Math.max(...points);
let playerWithTheBiggestScore = players.find(function (player) {
  return player.scorePoints === biggestScore;
});

console.log(
  "Максимальное значение:",
  playerWithTheBiggestScore.name,
  "-",
  biggestScore
);

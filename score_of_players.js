// let points = [];
// const players = [
//   {
//     id: 1,
//     name: "Ivan",
//     scorePoints: 4500,
//   },
//   {
//     id: 2,
//     name: "Petr",
//     scorePoints: 3600,
//   },
//   {
//     id: 3,
//     name: "Vadim",
//     scorePoints: 3433,
//   },
//   {
//     id: 4,
//     name: "Olga",
//     scorePoints: 2356,
//   },
// ];

// for (let i in players) {
//   points.push(players[i].scorePoints);
// }
// console.log(points);

// let biggestScore = Math.max(...points);
// console.log("Максимальное значение:", biggestScore);

const testData = [
  {
    players: [
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
    ],
    expectedMax: 4500,
  },
  {
    players: [
      {
        id: 1,
        name: "Alice",
        scorePoints: 2000,
      },
      {
        id: 2,
        name: "Bob",
        scorePoints: 3000,
      },
    ],
    expectedMax: 3000,
  },
  {
    players: [],
    expectedMax: undefined,
  },
];

function testFindMaxScore(testData) {
  for (const data of testData) {
    const points = [];
    for (const player of data.players) {
      points.push(player.scorePoints);
    }
    console.log("Players:", data.players);
    console.log("Expected Max:", data.expectedMax);

    const actualMax = Math.max(...points);
    console.log("Actual Max:", actualMax);
    console.log("Test Result:", actualMax === data.expectedMax);
    console.log("\n");
  }
}

testFindMaxScore(testData);

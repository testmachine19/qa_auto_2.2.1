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
    let maxPlayer;
    let maxPoints = 0;
    for (const player of data.players) {
      if (player.scorePoints > maxPoints) {
        maxPoints = player.scorePoints;
        maxPlayer = player;
      }
    }
    console.log("Expected Max:", data.expectedMax);

    if (maxPlayer) {
      console.log("Player with Max Score:", maxPlayer.name);
      console.log("Max Score:", maxPlayer.scorePoints);
    } else {
      console.log("No players in the list.");
    }
    console.log(
      "Test Result:",
      maxPlayer && maxPlayer.scorePoints === data.expectedMax
    );
    console.log("\n");
  }
}

testFindMaxScore(testData);

const testData1 = [
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
    expectedMin: 2356,
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
    expectedMin: 2000,
  },
  {
    players: [],
    expectedMin: undefined,
  },
];

function testFindMinScore(testData1) {
  for (const data of testData1) {
    let minPlayer;
    let maxPoints = 5000;
    for (const player of data.players) {
      if (player.scorePoints < maxPoints) {
        maxPoints = player.scorePoints;
        minPlayer = player;
      }
    }
    console.log("Expected Min:", data.expectedMin);

    if (minPlayer) {
      console.log("Player with Min Score:", minPlayer.name);
      console.log("Min Score:", minPlayer.scorePoints);
    } else {
      console.log("No players in the list.");
    }
    console.log(
      "Test Result:",
      minPlayer && minPlayer.scorePoints === data.expectedMin
    );
    console.log("\n");
  }
}

testFindMinScore(testData1);

const testData2 = [
  {
    players: [
      {
        id: 1,
        name: "Ivan",
        scorePoints: -56,
      },
      {
        id: 2,
        name: "Petr",
        scorePoints: 3600.56,
      },
      {
        id: 3,
        name: "Vadim",
        scorePoints: -1234,
      },
      {
        id: 4,
        name: "Olga",
        scorePoints: 2356,
      },
    ],
    expectedMax: 4500,
    expectedMin: -4500,
  },
  {
    players: [
      {
        id: "null",
        name: "null",
        scorePoints: "",
      },
      {
        id: 2,
        name: "Bob",
        scorePoints: -560,
      },
    ],
    expectedMax: 3000,
    expectedMin: -4500,
  },
];

function testFindMaxScore(testData2) {
  for (const data of testData2) {
    let maxPlayer;
    let maxPoints = 0;
    for (const player of data.players) {
      if (player.scorePoints > maxPoints) {
        maxPoints = player.scorePoints;
        maxPlayer = player;
      }
    }
    console.log("Expected Max:", data.expectedMax);

    if (maxPlayer) {
      console.log("Player with Max Score:", maxPlayer.name);
      console.log("Max Score:", maxPlayer.scorePoints);
    } else {
      console.log("No players in the list.");
    }
    console.log(
      "Test Result:",
      maxPlayer && maxPlayer.scorePoints === data.expectedMax
    );
    console.log("\n");
  }
}

testFindMaxScore(testData2);

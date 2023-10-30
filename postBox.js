let userBalance = 500;
const packageCost = 100;
const smsCode = "A001DFX0";
const postBox = [null, null, null, "1432HGF", null];

let dataBase = {
  "1432HGF": {
    ID: "1432HGF",
    cellNumber: 4,
    cost: packageCost,
  },
};

if (postBox.includes(smsCode) && dataBase[smsCode]) {
  const packageInfo = dataBase[smsCode];
  if (userBalance >= packageInfo.cost) {
    userBalance -= packageInfo.cost;
    postBox[postBox.indexOf(smsCode)] = null;
    console.log(
      `Заберите посылку ${packageInfo.ID} из ячейки №${packageInfo.cellNumber}. Ваш счет составляет: ${userBalance}ед.`
    );
  } else {
    console.log("Недостаточно средств на балансе для получения посылки.");
  }
} else {
  console.log(
    "Код смс не соответствует коду в базе данных или посылка отсутствует в ячейке."
  );
}

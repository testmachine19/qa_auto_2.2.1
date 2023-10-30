const userBalance = 500;
const packageCost = 100;
const smsCode = "A001DFX0";
const postBoxes = [null, null, null, "1432HGF", null];

const packageData = {
  "1432HGF": {
    cellNumber: 4,
    cost: 100,
  },
};

if (smsCode in packageData) {
  const packageGetting = packageData[smsCode];

  if (userBalance >= packageGetting.cost) {
    userBalance -= packageGetting.cost;

    postBoxes[packageGetting.cellNumber] = smsCode;
    console.log(
      `Заберите посылку ${smsCode} из ячейки №${packageInfo.cellNumber}. Ваш счет составляет: ${userBalance}ед.`
    );
  } else {
    console.log("На вашем счете недостаточно средств для получения посылки.");
  }
} else {
  console.log("Посылка с указанным кодом не найдена в базе данных.");
}

let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];

function calculateExpenses(yearlyExpences) {
  let totalExpensesAbove1000 = 0;

  for (let i = 0; i < yearlyExpences.length; i++) {
    if (yearlyExpences[i] > 1000) {
      totalExpensesAbove1000 += yearlyExpences[i];
    }
  }

  return totalExpensesAbove1000;
}

expencesExamples.forEach((data, index) => {
  const total = calculateExpenses(data.yearlyExpences);
  console.log(`Сумма расходов выше 1000 для массива: ${index + 1}: ${total}`);
});

console.log("Проверка достоверноси расчета первой функции:");

function testExpenseCalculator(expenseData) {
  const { yearlyExpences } = expenseData;
  const calculatedTotal = calculateExpenses(yearlyExpences);
  console.log(`Суииа расходов выше 1000: ${calculatedTotal}`);
}

expencesExamples.forEach(testExpenseCalculator);
